import React, { Component } from 'react';
import Populares from '../Populares/Populares';
import Buscador from '../Buscador/Buscador';

class PeliculasPopulares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      peliculasFiltradas: [],
      filtro: ""
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1&api_key=0fff56e4cd11a172a6a90b73b1f4c1f1")
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
    const texto = event.target.value;
    const filtradas = this.state.peliculas.filter((peli) =>
      peli.title.toLowerCase().includes(texto.toLowerCase())
    );
    this.setState({
      filtro: texto,
      peliculasFiltradas: filtradas
    });
  };

  render() {
    return (
      <>
        <Buscador />

        <h2>Películas populares</h2>
        <Populares peliculas={this.state.peliculasFiltradas} />
      </>
    );
  }
}

export default PeliculasPopulares;
