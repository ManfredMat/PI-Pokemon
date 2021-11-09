import {FETCH_POKEMONS , SEARCH_POKEMON , SORT_POKEMON , CREATE_POKEMON , FILTER_POKEMON , FETCH_TYPES} from '../actions/index'

const initialState={
    pokemons:[],
    filteredPokemons:[],
    searchedPokemon:[],
    types:[]
       
}

const reducer = (state = initialState , action)=>{
    switch (action.type){
        case FETCH_POKEMONS:
            state.pokemons=[]
            return{
                ...state,
                pokemons: action.payload.data,
                filteredPokemons:action.payload.data
            }
        case SEARCH_POKEMON:
            return{
                ...state,
                searchedPokemon: action.payload.data
            }
        case SORT_POKEMON:
            let sortedPokemons=state.filteredPokemons
            if(action.payload === "DEF"){
                sortedPokemons = sortedPokemons.sort((a,b)=>{
                    if(a.id > b.id){
                        
                        return  1 
                    }
                    if(a.id < b.id){
                        
                        return  (-1 )
                    }
                    return 0
                })
            }
            if(action.payload === "STRG"){
                sortedPokemons = sortedPokemons.sort((a,b)=>{
                    if(a.strenght < b.strenght){
                        
                        return  1 
                    }
                    if(a.strenght > b.strenght){
                        
                        return  (-1 )
                    }
                    return 0
                })
            }
            if(action.payload === "ASC" || action.payload === "DES"){

                sortedPokemons = sortedPokemons.sort((a,b)=>{
                    if(a.name < b.name){
                        
                        return action.payload === "ASC" ? -1 : 1;
                    }
                    if(a.name > b.name){
                        
                        return action.payload === "ASC" ? 1 : -1;
                    }
                    return 0
                })
            }
            
            return{
                ...state,
                filteredPokemons:sortedPokemons
            }
        case CREATE_POKEMON:
            let nuevosPokemons = [...state.pokemons , action.payload]
           
            return{
                ...state,
                pokemons:nuevosPokemons,
                filteredPokemons:nuevosPokemons,
            }
        case FILTER_POKEMON:
            let pokeFilter = state.pokemons
            if(action.payload === "ALL"){
                return{
                    ...state,
                    filteredPokemons:pokeFilter
                }
            }
            if(action.payload === "ORG"){
               pokeFilter = pokeFilter.filter(pokemon=> pokemon.id < 1109)
            } 
            if(action.payload === "CTM"){
                pokeFilter = pokeFilter.filter(pokemon=> typeof pokemon.id === 'string')
            }
            console.log(pokeFilter)
            return{
                ...state,
                filteredPokemons:pokeFilter
            }
        case FETCH_TYPES:
            state.types=[]
            console.log(action.payload)
            return{
                ...state,
                types: action.payload.data,
            }

        default: return state
    }

}
export default reducer;