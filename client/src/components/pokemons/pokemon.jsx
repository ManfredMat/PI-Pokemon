import style from './pokemon.module.css'
import {OBJECT_TYPE} from '../variables_Glob/UrlsTypes'
import { Link } from "react-router-dom"

export default function Pokemon(pokemon){
    let poke = pokemon.pokemon;
    let types = poke.types;

    function renderTypes(types){
        let tipos = types.map((type , index)=>{
            return(<img src={OBJECT_TYPE[type]} width="20" height="20" title={type} key={index} alt=""/>) 
        })
        return tipos
    }
    
    return (
        <div className={style.pokemonCard}>
            <div className={style.HeadCard}>
            <Link to={('/pokedetail/'+ poke.name)} className={style.link}>
            <h4>{poke.name}</h4>
            </Link>
            </div>
            <div className={style.pokemonImg}>
            <img src={poke.image} width="100" height="100" alt=""/>
            </div>
            <div className={style.pokemonType}>

            <h5>Types: </h5>
            <div className={style.types}>
            
            {renderTypes(types)}
            </div>

            </div>
        </div>
        )
}