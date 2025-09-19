import React, { Component } from "react";

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: null
    };
  }

  componentDidMount() {
  
    const id = this.props.match.params.id;
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=TU_API_KEY&language=es-ES`)
      .then(response => response.json())
      .then(data => {
        this.setState({ pelicula: data });
      })
      .catch(error => console.log("Error al cargar detalle:", error));
  }

  render() {
    return (
      <div>
        <h1>Detalle</h1>
      </div>
    );
  }
}

export default Detalle;
