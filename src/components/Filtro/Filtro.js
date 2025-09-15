import React from 'react'

function Filtro({ value, onChange, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="filtro"
                placeholder="Buscar pelicula..."
                value={value}
                onChange={onChange}
            />
            <button type="submit">Buscar</button>
        </form>
    )
}

export default Filtro
