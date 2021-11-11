import {FETCH_POKEMONS , SEARCH_POKEMON , SORT_POKEMON , CREATE_POKEMON , FILTER_POKEMON , FETCH_TYPES ,FILTER_POKEMON_TYPE ,CLEAN_SEARCH} from '../actions/index'

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
                
                return{
                    ...state,
                    filteredPokemons:state.pokemons
                }
                
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
                filteredPokemons:sortedPokemons.map((pokemon)=> pokemon)
            }
        case CREATE_POKEMON:
            let nuevosPokemons = [...state.pokemons , action.payload]
           
            return{
                ...state,
                pokemons:nuevosPokemons,
                filteredPokemons:nuevosPokemons,
            }
        case FILTER_POKEMON:
            let pokemons = state.pokemons
            let pokeFilter = state.filteredPokemons
            if(action.payload === "ALL"){
                return{
                    ...state,
                    filteredPokemons:pokemons
                }
            }
            if(action.payload === "ORG"){
               pokeFilter = pokeFilter.filter(pokemon=> pokemon.id < 1109)
            } 
            if(action.payload === "CTM"){
                pokeFilter = pokeFilter.filter(pokemon=> typeof pokemon.id === 'string')
            }
            
            return{
                ...state,
                filteredPokemons:pokeFilter
            }
        case FETCH_TYPES:
            state.types=[]
            
            return{
                ...state,
                types: action.payload.data,
            }
        case FILTER_POKEMON_TYPE:
            let pokemon = state.pokemons
            let pokeFilte = state.filteredPokemons
            if(action.payload === "RESET"){
                return{
                    ...state,
                    filteredPokemons:pokemon
                }
            }
            if(action.payload === "ALL"){
                return{
                    ...state,
                    filteredPokemons:pokeFilte
                }
            }
            if(action.payload !== "ALL" && action.payload !== ""){
                
                pokeFilte=pokeFilte.filter( pokemon => pokemon.types.includes(action.payload) === true)
            }
            return{
                ...state,
                filteredPokemons:pokeFilte
            }
        case CLEAN_SEARCH:
            return{
                ...state,
                searchedPokemon:[]
            }
        default: return state
    }

}
export default reducer;