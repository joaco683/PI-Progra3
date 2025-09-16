import React, { Component } from 'react';
import Cartelera from '../Cartelera/Cartelera';
import Filtro from '../Filtro/Filtro';

class PeliculasCartelera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      peliculasFiltradas: [],
      filtro: ""
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1&api_key=6fc501a0ec0c8dd824b20948acf38e57')
      .then(response => response.json())
      .then(data => this.setState({
        peliculas: data.results,
        peliculasFiltradas: data.results
      }))
      .catch(error => console.log(error));
  }

  manejarSubmit = (event) => {
    event.preventDefault();
  };

  manejarCambio = (event) => {
    const texto = event.target.value.toLowerCase();
    const filtradas = this.state.peliculas.filter(peli =>
      peli.title.toLowerCase().includes(texto)
    );
    this.setState({
      filtro: texto,
      peliculasFiltradas: filtradas
    });
  };

  render() {
    return (
      <>
        <Filtro
          value={this.state.filtro}
          manejarCambio={this.manejarCambio}
          manejarSubmit={this.manejarSubmit}
        />

        <h2>Películas en cartelera</h2>
        <Cartelera peliculas={this.state.peliculasFiltradas} />
      </>
    );
  }
}

export default PeliculasCartelera;
