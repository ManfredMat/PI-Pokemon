import { pokeFetch } from "../actions";
import { useDispatch , useSelector} from "react-redux";
export default function ButtonHome(){
    let dispatch = useDispatch()
    let pokemons = useSelector((state)=>state.pokemons)
    function onClickFetch(e){
        e.preventDefault();
        dispatch(pokeFetch())
    }
    function onClickConsole(){
        console.log(pokemons)
    }
    return<div>
    <button onClick={onClickFetch}>Gotta Catch'em all !!</button>
    <button onClick={onClickConsole}>test</button>    
    </div>
}