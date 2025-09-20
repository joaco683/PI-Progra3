import React, { Component } from "react";
import Populares from "../Populares/Populares";
import Cartelera from "../Cartelera/Cartelera";
import Card from "../Card/Card";
import "./Home.css";

class Pagina extends Component {
  constructor(props) {
    super(props);
    this.state = {
      populares: [],
      cartelera: [],
      query: "", 
      resultados: []
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

  controlarCambios(event) {
    this.setState({ query: event.target.value });
  }

  evitarSubmit(event) {
    event.preventDefault();

    if (this.state.query === "") return;

    fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.query}&language=es-ES&api_key=0fff56e4cd11a172a6a90b73b1f4c1f1`)
      .then(res => res.json())
      .then(data => this.setState({ resultados: data.results }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        {/* Formulario de búsqueda */}
        <form onSubmit={(event) => this.evitarSubmit(event)}>
          <input
            type="text"
            placeholder="Buscar película..."
            value={this.state.query}
            onChange={(event) => this.controlarCambios(event)}
          />
          <button type="submit">Buscar</button>
        </form>

        {/* Resultados de búsqueda */}
        {this.state.resultados.length > 0 ? (
          <div>
            <h2>Resultados de búsqueda</h2>
            <section className="row cards">
              {this.state.resultados.map(pelicula => (
                <Card
                  key={pelicula.id}
                  pelicula={pelicula}
                />
              ))}
            </section>
          </div>
        ) : null}

        {/* Populares */}
        <h2>Películas populares</h2>
        <Populares peliculas={this.state.populares} />

        {/* Cartelera */}
        <h2>Cartelera</h2>
        <Cartelera peliculas={this.state.cartelera} />
      </>
    );
  }
}

export default Pagina;
