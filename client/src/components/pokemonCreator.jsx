import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { pokeAdd } from "../actions";



export default function PokeCreator(){
    const[nuevoPokemon , setNuevoPokemon] =useState({
        name:'',
        image:'',
        life:0,
        strenght:0,
        defense:0,
        speed:0,
        height:0,
        weight:0

    })
    
    let dispatch = useDispatch()

    let history = useHistory()
    
    function onInputChangeName(e){
        e.preventDefault()
        setNuevoPokemon({
            ...nuevoPokemon,
            [e.target.name]: e.target.value.toLowerCase(),
        })
    }
    function onInputChange(e){
        e.preventDefault()
        setNuevoPokemon({
            ...nuevoPokemon,
            [e.target.name]: e.target.value,
        })
    }
    
    function onSubmit(e){
        e.preventDefault()   
        dispatch(pokeAdd(nuevoPokemon))
        axios.post('http://localhost:3001/addpokemon' , nuevoPokemon)
        .then((response)=>{
            history.push('/pokemain');
        })
    }
    return<div>
    <form onSubmit={onSubmit}>
        <label>Nombre: </label> <input name="name" type="text" value={nuevoPokemon.name} onChange={onInputChangeName}/>

        <label>Imagen: </label> <input name="image" type="url" value={nuevoPokemon.image} onChange={onInputChange}/>

        <label>PS: </label> <input name="life" type="number" value={nuevoPokemon.life} onChange={onInputChange}/>

        <label>Fuerza: </label> <input name="strenght" type="number" value={nuevoPokemon.strenght} onChange={onInputChange}/>

        <label>Defensa: </label> <input name="defense" type="number" value={nuevoPokemon.defense} onChange={onInputChange}/>

        <label>Velocidad: </label> <input name="speed" type="number" value={nuevoPokemon.speed} onChange={onInputChange}/>

        <label>Altura: </label> <input name="height" type="number" value={nuevoPokemon.height} onChange={onInputChange}/>

        <label>Peso: </label> <input name="weight" type="number" value={nuevoPokemon.weight} onChange={onInputChange}/>
        <input type="submit"/>

    </form>
    </div>
}