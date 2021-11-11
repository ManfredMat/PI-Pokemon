import FiltroPokemon from "./filter"
import Order from "./order"
import SearchBar from "./searchbar"
import style from './filterBar.module.css'
import FiltroByType from "./filterByType"
import { useDispatch } from "react-redux"
import { filterByType } from "../../actions"
import { useHistory } from "react-router"

export default function FilterBar(){
    
    let history = useHistory()
    let dispatch=useDispatch()
    
    function onSelectChange(e){
        e.preventDefault();
        dispatch(filterByType(e.target.value));
        history.go(0)
    }
    return(
        <div className={style.contenedorFilterBar}>
            <div  className={style.contenedorFilters}>
            <label>Order: </label>
            <Order />
            <label>Filter: </label>
            <FiltroPokemon/>
            <FiltroByType/>
            </div>
            <button value="RESET" onClick={onSelectChange} className={style.buttonFilter}>Reset filters</button>   
            <SearchBar/>
        </div>
    )
}