import React, { Component } from 'react'
import Card from '../Card/Card'

class Populares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            mostrarContenidoId: null
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1&api_key=6fc501a0ec0c8dd824b20948acf38e57')
            .then(response => response.json())
            .then(data => this.setState({ peliculas: data.results }))
            .catch(error => console.log(error));
    }

    ocultar = (peliculaId) => {
        const actual = this.state.mostrarContenidoId;
        if (actual === peliculaId) {
            this.setState({ mostrarContenidoId: null });
        } else {
            this.setState({ mostrarContenidoId: peliculaId });
        }
    };

    render() {
        const { peliculas, mostrarContenidoId } = this.state;
        return (
            <section className="row cards">
                {peliculas.map((pelicula, i) => {
                    if (i < 8) {
                        return (
                    <Card
                        key={pelicula.id}
                        pelicula={pelicula}
                        mostrarDescripcion={mostrarContenidoId === pelicula.id}
                        onOcultar={() => this.ocultar(pelicula.id)}
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


