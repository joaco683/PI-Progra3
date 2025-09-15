// import React, { Component } from 'react';
// import "./Series.css"
// import Filtro from '../Filtro/Filtro'
// import Card from '../Card/Card'

// class Series extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             peliculas: [],
//             textoFiltro: ""
//         };
//     }
//     componentDidMount() {
//         fetch('https://api.themoviedb.org/3/tv/popular?language=es-ES&page=1&api_key=6fc501a0ec0c8dd824b20948acf38e57')
//             .then(response => response.json())
//             .then(data => this.setState({ peliculas: data.results  }))
//             .catch(error => console.log(error));


//     }

//     evitarSubmit = (event) => {
//         event.preventDefault();
//     };

//     controlarCambios = (event) => {
//         this.setState({ textoFiltro: event.target.value });
//     };


//     render() {

//         const { peliculas, textoFiltro } = this.state;
//         const peliculasFiltradas = peliculas.filter(pelicula => {
//             const nombre = pelicula && (pelicula.name || pelicula.title || "");
//             return nombre.toLowerCase().includes((textoFiltro || "").toLowerCase());
//         });



//         return (
    
            
//             <>
//             <Filtro
//                 value={this.state.textoFiltro}
//                 onChange={this.controlarCambios}
//                 onSubmit={this.evitarSubmit}
//             />

//             <section className="row cards" id="movies">
//             {peliculasFiltradas.map(pelicula => (
//                 <Card key={pelicula.id} pelicula={pelicula} />
//             ))}
//         </section>
//         </>
//         );
//     }
// }

// export default Series;