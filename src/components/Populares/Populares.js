import React, { Component } from 'react';
import Card from '../Card/Card';

class Populares extends Component {
  render() {
    const { peliculas, mostrar = 8 } = this.props;
 
    if (peliculas === undefined) {
      return <p>No hay películas populares</p>;
    }
    if (peliculas.length === 0) {
      return <p>No hay películas populares</p>;
    }

   
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

export default Populares;
