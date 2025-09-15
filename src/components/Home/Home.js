import React from 'react';
import Populares from '../Populares/Populares';
import Cartelera from '../Cartelera/Cartelera';
import "./Home.css"

function Pagina() {
    return (
        <>
            <h2>Películas populares</h2>
            <Populares />

            <h2>Cartelera</h2>
            <Cartelera />
        </>
    );
}

export default Pagina;