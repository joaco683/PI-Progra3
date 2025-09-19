import React, { Component } from "react";
import Cartelera from "../Cartelera/Cartelera";
import Filtro from "../Filtro/Filtro";

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
    fetch("https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1&api_key=0fff56e4cd11a172a6a90b73b1f4c1f1")
      .then(res => res.json())
      .then(data => {
        this.setState({
          peliculas: data.results,
          peliculasFiltradas: data.results
        });
      })
      .catch(err => console.error(err));
  }

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
          valor={this.state.filtro}
          manejarCambio={this.manejarCambio}
        />
        <h2>Películas en cartelera</h2>
        <Cartelera peliculas={this.state.peliculasFiltradas} />
      </>
    );
  }
}

export default PeliculasCartelera;
