import React from 'react'
import "./Filtro.css"

function Filtro({ value, manejarCambio, manejarSubmit }) {
    return (
        <form className="filtro-form" onSubmit={manejarSubmit}>
            <input
                type="text"
                name="filtro"
                placeholder="Buscar pelicula..."
                value={value}
                onChange={manejarCambio}
                className="filtro-input"
            />
        </form>
    )
}

export default Filtro
