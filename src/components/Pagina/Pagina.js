import React, { Component } from 'react';
import "./Pagina.css"

class Pagina extends Component {
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

    // Evita que el form recargue la página
  evitarSubmit = (event) => {
    event.preventDefault();
  };

  // Actualiza el estado con lo que escribe el usuario
  controlarCambios = (event) => {
    this.setState({ textoFiltro: event.target.value });
  };


   /* Dsp lo corregimos abrirDescripcion = (e) => {
        const cardBody = e.target.parentNode; // contenedor .cardBody
        const desc = cardBody.querySelector(".card-text"); // busca el <p> con clase .card-text
        if (desc.style.display === "block") {
            desc.style.display = "none";
            e.target.textContent = "Ver descripción";
        } else {
            desc.style.display = "block";
            e.target.textContent = "Ocultar descripción";
        }
    } */

    render() {

        const { peliculas, textoFiltro } = this.state;
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
                        <button className='btn'>Ver descripcion</button>
                        <p className="card-text" style={{display: ""}}>{pelicula.overview}</p>
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