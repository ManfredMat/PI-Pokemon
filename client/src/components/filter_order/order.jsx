import {useDispatch} from 'react-redux'
import { pokeSort } from '../../actions'
import style from './order_filter.module.css'


export default function Order(){
    
    let dispatch = useDispatch()
    function onSelectChange(e){
        dispatch(pokeSort(e.target.value))        
    }
    return <select name="select" onChange={onSelectChange} className={style.filter}>
        <option value="">--SELECT--</option>
        <option value="DEF">DEFAULT</option>
        <option value="ASC">A-Z</option>
        <option value="DES">Z-A</option>
        <option value="STRG">STRENGHT</option>
        <option value="DEFENSE">DEFENSE</option>
        
    </select>
}