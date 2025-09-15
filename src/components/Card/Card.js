import React from 'react'
import { Link } from 'react-router-dom'

function Card({ pelicula, mostrarDescripcion, onOcultar }) {
    return (
        <article className="single-card-movie">
            <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} className="card-img-top" alt={pelicula.title} />
            <div className="cardBody">
                <h5 className="card-title">{pelicula.title}</h5>
                <button className="btn" onClick={onOcultar}>
                    {mostrarDescripcion ? "Ocultar descripción" : "Ver descripción"}
                </button>
                <p className="card-text" style={{ display: mostrarDescripcion ? 'block' : 'none' }}>{pelicula.overview}</p>
                <Link to={`/detalle/id/${pelicula.id}`} className="btn btn-primary">Ver más</Link>
            </div>
        </article>
    )
}

export default Card
