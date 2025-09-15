import React, { Component } from 'react';
import Filtro from '../Filtro/Filtro';
import Card from '../Card/Card';
import "./Pagina.css"

class Pagina extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            textoFiltro: "",
            mostrarContenidoId: null
        };
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1&api_key=6fc501a0ec0c8dd824b20948acf38e57')
            .then(response => response.json())
            .then(data => this.setState({ peliculas: data.results  }))
            .catch(error => console.log(error));
    }

    evitarSubmit = (event) => {
        event.preventDefault();
    };

    controlarCambios = (event) => {
        this.setState({ textoFiltro: event.target.value });
    };

    ocultar = (peliculaId) => {
        const actual = this.state.mostrarContenidoId;
        if (actual === peliculaId) {
            this.setState({ mostrarContenidoId: null });
        } else {
            this.setState({ mostrarContenidoId: peliculaId });
        }
    };

    render() {
        const { peliculas, textoFiltro, mostrarContenidoId } = this.state;
        const peliculasFiltradas = peliculas.filter(pelicula =>
            pelicula.title.toLowerCase().includes(textoFiltro.toLowerCase())
        );

        return (
            <>
                <Filtro
                    value={this.state.textoFiltro}
                    onChange={this.controlarCambios}
                    onSubmit={this.evitarSubmit}
                />

                <section className="row cards" id="movies">
                    {peliculasFiltradas.map(pelicula => (
                        <Card
                            key={pelicula.id}
                            pelicula={pelicula}
                            mostrarDescripcion={mostrarContenidoId === pelicula.id}
                            onOcultar={() => this.ocultar(pelicula.id)}
                        />
                    ))}
                </section>
            </>
        );
    }
}

export default Pagina;