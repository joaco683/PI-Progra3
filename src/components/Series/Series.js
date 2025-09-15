import React, { Component } from 'react';
import "./Series.css"
import Filtro from '../Filtro/Filtro'

class Series extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            textoFiltro: "",
            mostrarContenidoId: null
        };
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/tv/popular?language=es-ES&page=1&api_key=6fc501a0ec0c8dd824b20948acf38e57')
            .then(response => response.json())
            .then(data => this.setState({ peliculas: data.results  }))
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

    evitarSubmit = (event) => {
        event.preventDefault();
    };

    controlarCambios = (event) => {
        this.setState({ textoFiltro: event.target.value });
    };


    render() {

        const { peliculas, textoFiltro, mostrarContenidoId } = this.state;
        const peliculasFiltradas = peliculas.filter(pelicula => {
            const nombre = pelicula && (pelicula.name || pelicula.title || "");
            return nombre.toLowerCase().includes((textoFiltro || "").toLowerCase());
        });



        return (
    
            
            <>
            <Filtro
                value={this.state.textoFiltro}
                onChange={this.controlarCambios}
                onSubmit={this.evitarSubmit}
            />

            <section className="row cards" id="movies">
            {peliculasFiltradas.map(pelicula => (
                <article className="single-card-movie" key={pelicula.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} className="card-img-top" alt={pelicula.name || pelicula.title} />
                    <div className="cardBody">
                        <h5 className="card-title">{pelicula.name || pelicula.title}</h5>
                        <button className='btn' onClick={() => this.ocultar(pelicula.id)}>
                            {mostrarContenidoId === pelicula.id ? 'Ocultar descripción' : 'Ver descripción'}
                        </button>
                        <p className="card-text" style={{ display: mostrarContenidoId === pelicula.id ? 'block' : 'none' }}>{pelicula.overview}</p>
                        <a href={`/detalle/id/${pelicula.id}`} className="btn btn-primary">Ver más</a>
                    </div>
                </article>
            ))}
        </section>
        </>
        );
    }
}

export default Series;