
import {Route, Switch} from "react-router-dom"

import Home from "./screens/Home/Home"


function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/peliculas"  component={Peliculas} />
      <Route path="/detalle/id/:id"  component={Detalle}></Route>
      <Route path="/favoritos"  component={Favoritos}></Route>
      <Route path="/busqueda"  component={Busqueda}></Route>
      <Route path=""  component={NotFound}></Route>
    </Switch>
    <div className="">
    </div>
  );
}

export default App;
