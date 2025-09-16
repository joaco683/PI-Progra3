import React, { Component } from 'react'
import Card from '../Card/Card'

class Cartelera extends Component {
    

    render() {
        const { peliculas } = this.props;
        return (
            <section className="row cards">
                {peliculas.map((pelicula, i) => {
                    if (i < 8) {
                        return (
                    <Card
                        key={pelicula.id}
                        pelicula={pelicula}
                    />
                )
            }
            return null;   
        })}
            </section>
        )
    }
}

export default Cartelera


