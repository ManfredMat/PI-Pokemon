import style from './pokemon.module.css'
import {OBJECT_TYPE} from '../variables_Glob/UrlsTypes'
export default function Pokemon(pokemon){
    let poke = pokemon.pokemon;
    let types = poke.types;

    function renderTypes(types){
        let tipos = types.map((type)=>{
            return(<img src={OBJECT_TYPE[type]} width="20" height="20" title={type}/>) 
        })
        return tipos
    }
    return (
        <div className={style.pokemonCard}>
            <div className={style.HeadCard}>
            <h4>{poke.name}</h4>
            </div>
            <div className={style.pokemonImg}>
            <img src={poke.image} width="100" height="100"/>
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