import style from './App.module.css';
import Pokemons from './components/pokemons/pokemons';
import { Route, Switch } from 'react-router';
import ButtonHome from './components/buttonHome/buttonHome';
import PokeCreator from './components/pokemonCreator/pokemonCreator';
import PokeNavbar from './components/navBar/pokeNavBar';
import PokeCard from './components/pokemonDetail/pokeCard';
import FilterBar from './components/filter_order/filterBar';

function App() {
  return (
    <div>
        
        <Switch>

          <Route
          exact
          path='/'
          >
          <img src='https://i.ibb.co/Kw4kx5D/2.png' className={style.landingPokemon} alt=""/>
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

          <Route
          exact
          path='/pokedetail?id='
          >
          <PokeNavbar/>
          <PokeCard/>
          </Route>
          
        </Switch>
    </div>      
  );
}

export default App;
