import React, { Component } from "react";
import Populares from "../Populares/Populares";
import Cartelera from "../Cartelera/Cartelera";
import "./Home.css";

class Pagina extends Component {
  constructor(props) {
    super(props);
    this.state = {
      populares: [],
      cartelera: [],
    };
  }

  componentDidMount() {
    // Populares
    fetch("https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1&api_key=6fc501a0ec0c8dd824b20948acf38e57")
      .then((res) => res.json())
      .then((data) => this.setState({ populares: data.results }))
      .catch((err) => console.error(err));

    // Cartelera
    fetch("https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1&api_key=6fc501a0ec0c8dd824b20948acf38e57")
      .then((res) => res.json())
      .then((data) => this.setState({ cartelera: data.results }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <>
        <h2>Películas populares</h2>
        <Populares peliculas={this.state.populares} />

        <h2>Cartelera</h2>
        <Cartelera peliculas={this.state.cartelera} />
      </>
    );
  }
}

export default Pagina;
