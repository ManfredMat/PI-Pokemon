import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { pokeSearch } from "../actions";
import style from './pokeCard.module.css'

export default function PokeCard(){
    let {name}= useParams();
    let dispatch = useDispatch();
    useEffect(()=>{
        
    dispatch(pokeSearch(name))    
        
        },[dispatch])
        
    let pokemon = useSelector((state)=>state.searchedPokemon);
    if(pokemon.length > 0){
        pokemon = pokemon[0]
    }
    
    if(typeof pokemon.id === 'string'){
        
        pokemon.id = parseInt(1109 + Math.random()*9)
        
    }
    return(
        <div className={style.contenedorCard}>
        <div className = {style.cardheader}>
        <h1>{pokemon.name}</h1>
        <h4>ID: {pokemon.id}</h4>
        </div>
        <div className={style.contenedorImg}>
        <img src={pokemon.image}/>
        </div>
        <div className= {style.cardbody}>
        <label>Life: {pokemon.life}</label>
        <br/>
        <label>Strenght: {pokemon.strenght}</label>
        <br/>
        <label>Defense: {pokemon.defense}</label>
        <br/>
        <label>Speed: {pokemon.speed}</label>
        </div>
        </div>
    )
}