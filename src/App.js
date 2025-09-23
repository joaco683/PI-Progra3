import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import Peliculas from "./screens/Peliculas/Peliculas";
import Cartelera from "./screens/Cartelera/Cartelera";
import Detalle from "./screens/Detalle/Detalle";
import Favoritos from "./screens/Favoritos/Favoritos";
import SearchResults from "./screens/SearchResults/SearchResults";
import NotFound from "./screens/NotFound/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/populares" component={Peliculas} />
          <Route path="/cartelera" component={Cartelera} />
          <Route path="/detalle/id/:id" component={Detalle} />
          <Route path="/favoritos" component={Favoritos} />
          <Route path="/search/:query" component={SearchResults} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}


export default App;
