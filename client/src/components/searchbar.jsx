import React,{setState, useState,useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {pokeSearch} from '../actions/index'

export default function SearchBar(){

    const[search , setSearch]= useState('');
    let pokeBuscado = useSelector((state)=>state.searchedPokemon)
    let dispatch = useDispatch()
    

    function onSubmit(e){
        e.preventDefault();
        dispatch(pokeSearch(search))
        console.log(pokeBuscado)
    }
    function onChange(e){
        setSearch(e.target.value)
        
    }
    return <div>
        <form onSubmit={onSubmit}>
            <input placeholder="Pokebusqueda..." onChange={onChange} value={search}/>
            <button type="sumbit">Buscar</button>
        </form>
    </div>
}