import React, { Component } from 'react';
import "./Pagina.css"

class Pagina extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            textoFiltro: "",
            mostrarContenido:false
        };
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1&api_key=6fc501a0ec0c8dd824b20948acf38e57')
            .then(response => response.json())
            .then(data => this.setState({ peliculas: data.results  }))
            .catch(error => console.log(error));


    }

    // Evita que el form recargue la página
  evitarSubmit = (event) => {
    event.preventDefault();
  };

  controlarCambios = (event) => {
    this.setState({ textoFiltro: event.target.value });
  };

  ocultar = ()  => {
        this.setState({ mostrarContenido: !this.state.mostrarContenido });
    };

   

    render() {

        const { peliculas, textoFiltro, mostrarContenido } = this.state;
         const peliculasFiltradas = peliculas.filter(pelicula =>
        pelicula.title.toLowerCase().includes(textoFiltro.toLowerCase()))



        return (
            <> 
            
        <form onSubmit={this.evitarSubmit}>
          <input
            type="text"
            name="filtro"
            placeholder="Buscar pelicula..."
            value={this.state.textoFiltro}
            onChange={this.controlarCambios}
          />
          <button type="submit">Buscar</button>

        </form>
            
            <section className="row cards" id="movies">
            {peliculasFiltradas.map(pelicula => (
                <article className="single-card-movie" key={pelicula.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} className="card-img-top" alt={pelicula.title} />
                    <div className="cardBody">
                        <h5 className="card-title">{pelicula.title}</h5>
                         <button className="btn" onClick={this.ocultar}>
                        {mostrarContenido ? "Ocultar descripción" : "Ver descripción"}
                        </button>
                         
                         {mostrarContenido ? ( <p className="card-text">{pelicula.overview}</p> ) : null}
                        <a href={`/detalle/id/${pelicula.id}`} className="btn btn-primary">Ver más</a>
                    </div>
                </article>
            ))}
        </section>
            </>
        );
    }
}

export default Pagina;