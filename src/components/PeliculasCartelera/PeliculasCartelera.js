import React from 'react';
import './PeliculasCartelera.css'
import Cartelera from '../Cartelera/Cartelera'
import Filtro from '../Filtro/Filtro'

function PeliculasCartelera() {
    return (
        <>
            <Filtro />
            <h2>Películas en cartelera</h2>
            <Cartelera />
        </>
    );
}

export default PeliculasCartelera;