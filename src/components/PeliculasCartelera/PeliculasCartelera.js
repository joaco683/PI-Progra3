import React, { Component } from "react";
import Cartelera from "../Cartelera/Cartelera";
import Filtro from "../Filtro/Filtro";
import "../PeliculasCartelera/PeliculasCartelera.css"

class PeliculasCartelera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      peliculasFiltradas: [],
      filtro: "",
      peliculasMostradas: 8
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
      peliculasFiltradas: filtradas,
      peliculasMostradas: 8
    });
  };

  cargarMas = () => {
    this.setState({
      peliculasMostradas: this.state.peliculasMostradas + 8
    });
  };

  render() {
    const { peliculasFiltradas, peliculasMostradas } = this.state;

    let botonCargarMas = null;
    if (peliculasFiltradas.length > peliculasMostradas) {
      botonCargarMas = (
        <div className='cargarMas'>
          <button onClick={this.cargarMas} className="btn btn-primary"> Cargar más </button>
        </div>
      );
    }

    return (
      <>
        <Filtro
        value={this.state.filtro}
        manejarCambio={this.manejarCambio}
        manejarSubmit={this.manejarSubmit} />
        <h2>Películas en cartelera</h2>
        <Cartelera 
          peliculas={peliculasFiltradas} 
          mostrar={peliculasMostradas}
        />
        <div>{botonCargarMas} </div>
        
      </>
    );
  }
}

export default PeliculasCartelera;
