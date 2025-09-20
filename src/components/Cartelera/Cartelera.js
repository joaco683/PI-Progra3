import React, { Component } from 'react';
import Card from '../Card/Card';

class Cartelera extends Component {
  render() {
    const { peliculas, mostrar = 8 } = this.props;

    if (peliculas === undefined) {
      return <p>No hay películas en cartelera</p>;
    }

    if (peliculas.length === 0) {
      return <p>No hay películas en cartelera</p>;
    }

    // si hay películas, las mostramos
    return (
      <section className="row cards">
        {peliculas.map((pelicula, i) => {
          if (i < mostrar) {
            return (
              <Card
                key={pelicula.id}
                pelicula={pelicula}
              />
            );
          }
          return null;
        })}
      </section>
    );
  }
}

export default Cartelera;
