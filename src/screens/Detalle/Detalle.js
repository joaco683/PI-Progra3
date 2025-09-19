import React from "react";
import DetallePelicula from "../../components/DetallePelicula/DetallePelicula";

// Screen: solo envuelve al componente
function Detalle(props) {
  return <DetallePelicula {...props} />;
}

export default Detalle;
