import React, { Component } from 'react';
import Card from '../../components/Card/Card';

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personajesFavoritos: []
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
            this.setState({ personajesFavoritos: listaIDFavoritosAux });
          })
          .catch(error => console.log(error));
        }
      });
    } 




  }

  removerDeFavoritos = (id) => {
    const restantes = this.state.personajesFavoritos.filter(p => p.id !== id);
    this.setState({ personajesFavoritos: restantes });
  }

  render() {
    return (
      <React.Fragment>
        <h1 className = "titulo-favoritos">Favoritos</h1>

        <section className="cards">
          {this.state.personajesFavoritos.length === 0 ? (
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
            this.state.personajesFavoritos.map((personaje) => (
              <Card key={personaje.id} pelicula={personaje} onQuitar={(id) => this.removerDeFavoritos(id)}></Card>

            )))}
        </section>


      </React.Fragment>
    );
  }
}
export default Favoritos;



