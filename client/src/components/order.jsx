import React from 'react'
import {useDispatch} from 'react-redux'
import { pokeSort } from '../actions'



export default function Order(){
    
    let dispatch = useDispatch()
    function onSelectChange(e){
        dispatch(pokeSort(e.target.value))
    }
    return <select name="select" onChange={onSelectChange}>
        <option value="">--SELECT--</option>
        <option value="DEF">DEFAULT</option>
        <option value="ASC">A-Z</option>
        <option value="DES">Z-A</option>
        <option value="STRG">STRENGHT</option>
        
    </select>
}