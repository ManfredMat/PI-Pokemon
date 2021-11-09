import FiltroPokemon from "./filter"
import Order from "./order"
import SearchBar from "./searchbar"
import style from './filterBar.module.css'

export default function FilterBar(){
    return(
        <div className={style.contenedorFilterBar}>
            <div  className={style.contenedorFilters}>
            <label>Filters: </label>
            <Order/>
            <FiltroPokemon/>
            </div>
            <SearchBar/>
        </div>
    )
}