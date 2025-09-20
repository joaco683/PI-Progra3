import React, { Component } from "react";
import "./Buscador.css";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  componentDidMount() {
    this.setState({
      query: ""
    });
  }

  controlarCambios(event) {
    this.setState({ query: event.target.value });
  }

  evitarSubmit(event) {
    event.preventDefault();

    if (this.state.query !== "") {
      // Navegar a la página de resultados con la query como parámetro de ruta
      window.location.href = `/search/${this.state.query}`;
    }
  }

  render() {
    return (
      <div>
        {/* Formulario de búsqueda */}
        <form onSubmit={(event) => this.evitarSubmit(event)} className="buscador">
          <input
            type="text"
            placeholder="Buscar película..."
            value={this.state.query}
            onChange={(event) => this.controlarCambios(event)}
          />
          <button type="submit">Buscar</button>
        </form>
      </div>
    );
  }
}

export default Buscador;
