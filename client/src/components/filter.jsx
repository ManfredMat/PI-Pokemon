import { useDispatch } from "react-redux"
import { pokeFilter } from "../actions"


export default function FiltroPokemon(){
    let dispatch = useDispatch()
    function onSelectChange(e){
        dispatch(pokeFilter(e.target.value))
    }
    return <select name="select" onChange={onSelectChange}>
        <option value="">--SELECT--</option>
        <option value="ALL">ALL</option>
        <option value="ORG">ORIGINAL</option>
        <option value="CTM">CUSTOM</option>   
       </select>
}