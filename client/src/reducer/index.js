import {FETCH_POKEMONS , SEARCH_POKEMON , SORT_POKEMON , CREATE_POKEMON} from '../actions/index'

const initialState={
    pokemons:[],
    filteredPokemons:[],
    searchedPokemon:[],
       
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
            let sortedPokemons=state.pokemons
            sortedPokemons = sortedPokemons.sort((a,b)=>{
                if(a.name < b.name){
                    
                    return action.payload === "ASC" ? -1 : 1;
                }
                if(a.name > b.name){
                    
                    return action.payload === "ASC" ? 1 : -1;
                }
                return 0
            })
            console.log(sortedPokemons)
            return{
                ...state,
                filteredPokemons:sortedPokemons
            }
        case CREATE_POKEMON:
            let nuevosPokemons = [...state.pokemons , action.payload]
            console.log(action.payload)
            return{
                ...state,
                pokemons:nuevosPokemons,
                filteredPokemons:nuevosPokemons,
            }             
        default: return state
    }

}
export default reducer;