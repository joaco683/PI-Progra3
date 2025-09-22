import React from "react";
import DetallePelicula from "../../components/DetallePelicula/DetallePelicula";

function Detalle(props) {
  return <DetallePelicula id={props.match.params.id} />;
}

export default Detalle;
