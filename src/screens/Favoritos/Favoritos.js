import React, { Component } from 'react';
import Card from '../../components/Card/Card';

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculasFavoritos: []
    };
  }

  componentDidMount() {
    let listaIDFavoritos = [];
    let datosEnLS = localStorage.getItem('LSFavoritos');
    if (datosEnLS !== null) {
      listaIDFavoritos = JSON.parse(datosEnLS);
      let listaIDFavoritosAux = [];
      
      listaIDFavoritos.map(id => {
        if (id !== null) {
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0fff56e4cd11a172a6a90b73b1f4c1f1&language=es-ES`)
          .then(response => response.json())
          .then(data => {
            listaIDFavoritosAux.push(data);
            this.setState({ peliculasFavoritos: listaIDFavoritosAux });
          })
          .catch(error => console.log(error));
        }
      });
    } 




  }

  removerDeFavoritos = (id) => {
    const restantes = this.state.peliculasFavoritos.filter(p => p.id !== id);
    this.setState({ peliculasFavoritos: restantes });
  }

  render() {
    return (
      <React.Fragment>
        <h1 className = "titulo-favoritos">Favoritos</h1>

        <section className="cards">
          {this.state.peliculasFavoritos.length === 0 ? (
            (() => {
              const datosEnLS = localStorage.getItem('LSFavoritos');
              const lista = datosEnLS ? JSON.parse(datosEnLS) : [];
              if (lista.length === 0) {
                return <p>No hay favoritos añadidos</p>;
              } else {
                return <p>Cargando favoritos...</p>;
              }              
            })()
          ) : (
            this.state.peliculasFavoritos.map((pelicula) => (
              <Card key={pelicula.id} pelicula={pelicula} onQuitar={(id) => this.removerDeFavoritos(id)}></Card>

            )))}
        </section>


      </React.Fragment>
    );
  }
}
export default Favoritos;



