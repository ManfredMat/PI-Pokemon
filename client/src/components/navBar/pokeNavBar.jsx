import { Link } from "react-router-dom"
import './pokeNavBar.css'
import {clearSearched} from '../../actions/index'
import { useDispatch } from "react-redux"

const URL ="https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2021/04/Pikachu-Sentado-Png.png?w=900&ssl=1"
export default function PokeNavbar(){
    
    let dispatch=useDispatch()

    function handleClick(){
        dispatch(clearSearched())
    }

    return <div className="navBar">
        <div>
         <a href="https://www.youtube.com/watch?v=Rsv2VkoIpk0" target="blank" >
        <img id="logoHenry" src={URL} width="40" height="40" className="imgNav" alt="" href="https://www.youtube.com/watch?v=Rsv2VkoIpk0"/>
        </a>
        </div>
        
        <Link to='/pokelab' className="link">           
        <p className="pokemonLab">Pokemon Lab</p>
        </Link>
        <Link to='/pokemain' className="link" onClick={handleClick}>
        <p className="pokeDex">Pokedex</p>
        </Link>

    </div>
}