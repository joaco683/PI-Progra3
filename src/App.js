
import {Route, Switch} from "react-router-dom"
import Home from "./screens/Home/Home"
import Peliculas from "./screens/Peliculas/Peliculas"
import Series from "./screens/Series/Series"
import Detalle from "./screens/Detalle/Detalle"
import Favoritos from "./screens/Favoritos/Favoritos"
import Busqueda from "./screens/Busqueda/Busqueda"
import NotFound from "./screens/NotFound/NotFound"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/peliculas" component={Peliculas} />
        <Route path="/series" component={Series} />
        <Route path="/detalle/id/:id" component={Detalle} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/busqueda" component={Busqueda} />
        
        <Route path="*" element={<NotFound />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
