import React,{setState, useState,useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { pokeSort } from '../actions'
import { useHistory } from "react-router-dom";


export default function Order(){
    let history=useHistory()
    let dispatch = useDispatch()
    function onSelectChange(e){
        dispatch(pokeSort(e.target.value))
        history.push('/pokemain')
    }
    return <select name="select" onChange={onSelectChange}>
        <option value="ASC">A-Z</option>
        <option value="DES">Z-A</option>
    </select>
}