import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrarDescripcion: false,
            textoDescripcion: "Ver descripción"
        };
    }

    ocultar = () => {
        if (this.state.mostrarDescripcion) {
            this.setState({ mostrarDescripcion: false, textoDescripcion: 'Ver descripción' });
        } else {
            this.setState({ mostrarDescripcion: true, textoDescripcion: 'Ocultar descripción' });
        }
    };

    render() {
        const { pelicula } = this.props;
        const { mostrarDescripcion, textoDescripcion } = this.state;
        return (
            <article className="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} className="card-img-top" alt={pelicula.title} />
                <div className="cardBody">
                    <h5 className="card-title">{pelicula.title}</h5>
                    <button className="btn" onClick={this.ocultar}>{textoDescripcion}</button>
                    {mostrarDescripcion ? (
                        <p className="card-text">{pelicula.overview}</p>
                    ) : null}
                    <Link to={`/detalle/id/${pelicula.id}`} className="btn btn-primary">Ver más</Link>
                </div>
            </article>
        )
    }
}

export default Card
