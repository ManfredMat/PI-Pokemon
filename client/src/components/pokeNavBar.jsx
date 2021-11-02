import SearchBar from "./searchbar"
import { Link } from "react-router-dom"


export default function PokeNavbar(){
    return <div>
        <Link to='/pokelab'>
        <p>Pokemon Lab</p>
        </Link>
        <Link to='/pokemain'>
        <p>Pokedex</p>
        </Link>
        <SearchBar/>
    </div>
}