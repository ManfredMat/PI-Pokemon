import './App.css';
import Pokemons from './components/pokemons';
import Order from './components/order';
import { Route, Switch } from 'react-router';
import ButtonHome from './components/buttonHome';
import PokeCreator from './components/pokemonCreator';
import PokeNavbar from './components/pokeNavBar';


function App() {
  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
        <PokeNavbar/>
        <Switch>

          <Route
          exact
          path='/'
          >
          <ButtonHome/>
         
          </Route>

          <Route
          exact
          path='/pokemain'
          >
          <Order/>
          <Pokemons/>
          </Route>

          <Route
          exact
          path='/pokelab'
          >
          <PokeCreator/>
          </Route>
        </Switch>
    </div>      
  );
}

export default App;
