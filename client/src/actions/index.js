import axios from 'axios';

export const FETCH_POKEMONS = 'FETCH_POKEMONS'
export const CREATE_POKEMON = 'CREATE_POKEMON'
export const FILTER_POKEMON = 'FILTER_POKEMON'
export const SEARCH_POKEMON = 'SEARCH_POKEMON'
export const SORT_POKEMON = 'SORT_POKEMON'

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
    console.log('http://localhost:3001/pokemons/' + search)
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