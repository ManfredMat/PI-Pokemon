import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { pokeSearch } from "../../actions";
import style from './pokeCard.module.css';


export default function PokeCard(){
    let {name}= useParams();
    let error = true;
    let dispatch = useDispatch();    
    
    useEffect(()=>{
        
    dispatch(pokeSearch(name))
     
        
        },[dispatch , name])
        
    let pokemon = useSelector((state)=>state.searchedPokemon);
    
    if(pokemon.name === 'Error'){
        error=false
    }

    if(pokemon.length > 0){
        pokemon = pokemon[0]
    }
    
    if(typeof pokemon.id === 'string'){
        
        pokemon.id = parseInt(1109 + Math.random()*99)
        
    }
    
   
    return(<>
         {
             error ?
         <>    
        <div className={style.contenedorCard}>
        <div className = {style.cardheader}>
        <h2>{pokemon.name}</h2>
        <h4>ID: {pokemon.id}</h4>
        </div>

        <div className={style.typesImg}>
        <div className={style.contenedorImg}>
        <img src={pokemon.image} width="100" height="100" alt=""/>
        </div>
        </div>

        <div className= {style.cardbody}>
        <label>Life: {pokemon.life}</label>
        <br/>
        <label>Strenght: {pokemon.strenght}</label>
        <br/>
        <label>Defense: {pokemon.defense}</label>
        <br/>
        <label>Speed: {pokemon.speed}</label>
        <br/>
        <label>Height: {pokemon.height} <b>''</b></label>
        <br/>
        <label>Weight: {pokemon.weight} kg</label>
        </div>
        </div>
        </>:

        <img src ='https://i.ibb.co/m8tfD0c/png-404.png' className={style.error404} alt=""/>
        
         }   
        
        </>
    )
}