import { Link } from "react-router-dom"
import './pokeNavBar.css'
const URL ="https://w7.pngwing.com/pngs/728/197/png-transparent-pokemon-pikachu-pokemon-go-pokemon-yellow-pokemon-pikachu-pikachu-leaf-dog-like-mammal-smiley-thumbnail.png"
export default function PokeNavbar(){
    return <div className="navBar">
        <div>
         <a href="https://www.youtube.com/watch?v=Rsv2VkoIpk0" target="blank" >
        <img id="logoHenry" src={URL} width="40" height="40" className="imgNav" alt="" href="https://www.youtube.com/watch?v=Rsv2VkoIpk0"/>
        </a>
        </div>
        
        <Link to='/pokelab' className="link">           
        <p className="pokemonLab">Pokemon Lab</p>
        </Link>
        <Link to='/pokemain' className="link">
        <p className="pokeDex">Pokedex</p>
        </Link>

    </div>
}