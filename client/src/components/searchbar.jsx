import React,{useState } from 'react'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import {pokeSearch} from '../actions/index'
export default function SearchBar(){

    const[search , setSearch]= useState('');
    
    let dispatch = useDispatch()
    

    function onSubmit(e){
        e.preventDefault();
        dispatch(pokeSearch(search))
        
    }
    function onClickClear(){
        setSearch('')
    }
    function onChange(e){
        setSearch(e.target.value.toLowerCase())
        
    }
    return <div>
        <form onSubmit={onSubmit}>
            <input placeholder="Pokebusqueda..." onChange={onChange} value={search}/>
            <Link to={`/pokedetail/${search}`}>
            <button type="sumbit" onClick={onClickClear}>Buscar</button>
            </Link>
        </form>        

    </div>
}