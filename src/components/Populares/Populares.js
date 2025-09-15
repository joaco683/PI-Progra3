import React, { Component } from 'react'
import Card from '../Card/Card'

class Populares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: []
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1&api_key=6fc501a0ec0c8dd824b20948acf38e57')
            .then(response => response.json())
            .then(data => this.setState({ peliculas: data.results }))
            .catch(error => console.log(error));
    }

    render() {
        const { peliculas } = this.state;
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

export default Populares


