import React from 'react';
import './PeliculasPopulares.css'
import Populares from '../Populares/Populares'
import Filtro from '../Filtro/Filtro'

function PeliculasPopulares() {
    return (
        <>
            <Filtro />
            <h2>Películas populares</h2>
            <Populares />
        </>
    );
}

export default PeliculasPopulares;