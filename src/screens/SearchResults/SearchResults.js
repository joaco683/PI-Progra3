import React, { Component } from "react";
import Card from "../../components/Card/Card";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: []
    };
  }

  componentDidMount() {
    // Obtener la query de las props
    const query = this.props.match.params.query;
    
    if (query) {
      this.buscarPeliculas(query);
    }
  }

  buscarPeliculas(query) {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&language=es-ES&api_key=0fff56e4cd11a172a6a90b73b1f4c1f1`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          resultados: data.results
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <h2>Resultados de búsqueda</h2>

        {this.state.resultados.length > 0 ? (
          <div>
            <section className="row cards">
              {this.state.resultados.map((peli) => {
                return (
                  <Card key={peli.id} pelicula={peli} />
                );
              })}
            </section>
          </div>
        ) : (
          <p>No se encontraron películas</p>
        )}
      </div>
    );
  }
}

export default SearchResults;
