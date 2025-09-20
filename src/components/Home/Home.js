import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Populares from "../Populares/Populares";
import Cartelera from "../Cartelera/Cartelera";
import Buscador from "../Buscador/Buscador";
import "../Home/Home.css";
import reactRouterDom from "react-router-dom";

class Pagina extends Component {
  constructor(props) {
    super(props);
    this.state = {
      populares: [],
      cartelera: []
    };
  }

  componentDidMount() {
    // Populares
    fetch(`https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1&api_key=0fff56e4cd11a172a6a90b73b1f4c1f1`)
      .then(res => res.json())
      .then(data => this.setState({ populares: data.results }))
      .catch(err => console.error(err));

    // Cartelera
    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1&api_key=0fff56e4cd11a172a6a90b73b1f4c1f1`)
      .then(res => res.json())
      .then(data => this.setState({ cartelera: data.results }))
      .catch(err => console.error(err));
  }


  render() {
    return (
      <div>
        <Buscador />

        <h2>Películas populares</h2>
        <Populares peliculas={this.state.populares} />

        <div className="contenedor-boton">
        <Link to="/populares" className="vertodas">Ver todas </Link></div>

        <h2>Cartelera</h2>
        <Cartelera peliculas={this.state.cartelera} />
        <div className="contenedor-boton">
        <Link to="/cartelera" className="vertodas">Ver todas </Link></div>

      </div>
    );
  }
}

export default Pagina;
