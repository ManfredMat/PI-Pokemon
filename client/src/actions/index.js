import axios from 'axios';

export const FETCH_POKEMONS = 'FETCH_POKEMONS'
export const FETCH_TYPES = 'FETCH_TYPES'
export const CREATE_POKEMON = 'CREATE_POKEMON'
export const FILTER_POKEMON = 'FILTER_POKEMON'
export const FILTER_POKEMON_TYPE = 'FILTER_POKEMON_TYPE'
export const SEARCH_POKEMON = 'SEARCH_POKEMON'
export const SORT_POKEMON = 'SORT_POKEMON'
export const CLEAN_SEARCH ='CLEAN_SEARCH'

export function pokeFetch(){
    return function(dispatch){
        axios.get('http://localhost:3001/pokemons')
        .then((pokemons)=>{
            dispatch({
                type:FETCH_POKEMONS,
                payload:pokemons
            })
        })
        .catch((error)=>{console.log(error)})
    }
}
export function pokeAdd(pokemon){
    return{
        type:CREATE_POKEMON,
        payload:pokemon
    }
}
export function pokeSearch(search){
    
    return function(dispatch){
        axios.get('http://localhost:3001/pokemons/' + search )
        .then((pokemons)=>{
            
            dispatch({
                type:SEARCH_POKEMON,
                payload:pokemons
            })
        })
        .catch((error)=>{console.log(error)})
    }
}
export function pokeSort(order){
    return{
        type:SORT_POKEMON,
        payload:order
    }
}
export function pokeFilter(filter){
    return{
        type:FILTER_POKEMON,
        payload:filter
    }
}
export function filterByType(filter){
    return{
        type:FILTER_POKEMON_TYPE,
        payload:filter
    }
}
export function typeFetch(){
    return function(dispatch){
        axios.get('http://localhost:3001/types')
        .then((types)=>{
            dispatch({
                type:FETCH_TYPES,
                payload:types
            })
        })
        .catch((error)=>{console.log(error)})
    }
}
export function clearSearched(){
    return{
        type:CLEAN_SEARCH,
    }
}