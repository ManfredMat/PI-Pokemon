import './App.css';
import './components/buttonHome.css'
import Pokemons from './components/pokemons';
import { Route, Switch } from 'react-router';
import ButtonHome from './components/buttonHome';
import PokeCreator from './components/pokemonCreator';
import PokeNavbar from './components/pokeNavBar';
import PokeCard from './components/pokeCard';
import FilterBar from './components/filterBar';

function App() {
  return (
    <div>
        
        <Switch>

          <Route
          exact
          path='/'
          >
          
          <ButtonHome className = "buttonHome"/>
         
          </Route>

          <Route
          exact
          path='/pokemain'
          >
          <PokeNavbar/>
          <FilterBar/>
          <Pokemons/>
          </Route>

          <Route
          exact
          path='/pokelab'
          >
          <PokeNavbar/>
          <PokeCreator/>
          </Route>
          <Route
          exact
          path='/pokedetail/:name'
          >
          <PokeNavbar/>
          <PokeCard/>
          </Route>
        </Switch>
    </div>      
  );
}

export default App;
