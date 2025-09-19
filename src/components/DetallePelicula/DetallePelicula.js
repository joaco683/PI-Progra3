import React, { Component } from "react";
import "./DetallePelicula.css";

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0fff56e4cd11a172a6a90b73b1f4c1f1&language=es-ES`)
      .then(response => response.json())
      .then(data => {
        this.setState({ pelicula: data });
  })
  .catch(error => console.log("Error al cargar detalle:", error));


  }
  render() {
    if (this.state.pelicula === null) {
      return <h3>Cargando...</h3>;
    }

    return (
        <div className="detalle-container">
          <img
            src={`https://image.tmdb.org/t/p/w500${this.state.pelicula.poster_path}`}
            alt={this.state.pelicula.title}
          />
          <div className="detalle-info">
            <h1>{this.state.pelicula.title}</h1>
            <p><strong>Fecha de estreno:</strong> {this.state.pelicula.release_date}</p>
            <p><strong>Rating:</strong> {this.state.pelicula.vote_average}</p>
            <p><strong>Duración:</strong> {this.state.pelicula.runtime} minutos</p>
            <p><strong>Sinopsis:</strong> {this.state.pelicula.overview}</p>
            <p>
              <strong>Géneros:</strong>{" "}
              {this.state.pelicula.genres
                ? this.state.pelicula.genres.map((g, idx) => (
                    <span key={idx}>{g.name} </span>
                  ))
                : "No disponible"}
            </p>
          </div>
        </div>
      );
      

  }
}

export default Detalle;
