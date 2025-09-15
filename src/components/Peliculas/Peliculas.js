import React, { Component } from 'react';
import "./Peliculas.css"

class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            textoFiltro: "",
        };
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1&api_key=6fc501a0ec0c8dd824b20948acf38e57')
            .then(response => response.json())
            .then(data => this.setState({ peliculas: data.results  }))
            .catch(error => console.log(error));


    }


    render() {

        const { peliculas, textoFiltro } = this.state;
         const peliculasFiltradas = peliculas.filter(pelicula =>
        pelicula.title.toLowerCase().includes(textoFiltro.toLowerCase()))



        return (
    
            
            <section className="row cards" id="movies">
            {peliculasFiltradas.map(pelicula => (
                <article className="single-card-movie" key={pelicula.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} className="card-img-top" alt={pelicula.title} />
                    <div className="cardBody">
                        <h5 className="card-title">{pelicula.title}</h5>
                        <button className='btn' >Ver descripcion</button>
                        <p className="card-text" >{pelicula.overview}</p>
                        <a href={`/detalle/id/${pelicula.id}`} className="btn btn-primary">Ver más</a>
                    </div>
                </article>
            ))}
        </section>
        );
    }
}

export default Peliculas;