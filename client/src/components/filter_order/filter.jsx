import { useDispatch } from "react-redux"
import { pokeFilter } from "../../actions"
import style from './order_filter.module.css'

export default function FiltroPokemon(){
    let dispatch = useDispatch()
    function onSelectChange(e){
        dispatch(pokeFilter(e.target.value))
    }
    return <select name="select" onChange={onSelectChange} className={style.filter} >
        <option value="DEFAULT">--SELECT--</option>
        <option value="ALL">ALL</option>
        <option value="ORG">ORIGINAL</option>
        <option value="CTM">CUSTOM</option>   
       </select>
}