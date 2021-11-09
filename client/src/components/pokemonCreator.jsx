import axios from "axios"
import { useState , useEffect} from "react"
import { useDispatch , useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { pokeFetch } from "../actions";
import { typeFetch } from "../actions";
import style from './pokemonCreator.module.css'


export default function PokeCreator(){

    let dispatch = useDispatch();

    let history = useHistory();
    

    const[nuevoPokemon , setNuevoPokemon] =useState({
        name:'',
        image:'',
        life:0,
        strenght:0,
        defense:0,
        speed:0,
        height:0,
        weight:0,
        type:[]

    })

    let types = useSelector((state)=>state.types)
  
    useEffect(()=>{
        dispatch(typeFetch())
    },[])

    const renderTypes = (types)=>{
  
        let tipos = types.map((type,index)=>{

                return (
                <div key={index}>
                <input type="checkbox" name={type.id}  onClick={handlerTypes} ></input><label htmlFor = {type.id} className={style.checkboxLabel}>{type.name}</label>
                </div>)

        })
        return tipos        
    } 
    function handlerTypes(e){
        e.preventDefault()

        let arrTypes=nuevoPokemon.type;

        if(arrTypes.includes(e.target.name)){
            arrTypes = arrTypes.filter(id => id !== e.target.name )
            
            return
        }else{
    
        
        arrTypes.push(e.target.name)
        
        }
        
    }
    function onInputChangeName(e){
        e.preventDefault()
        setNuevoPokemon({
            ...nuevoPokemon,
            [e.target.name]: e.target.value.toLowerCase(),
        })
    }
    function onInputChange(e){
        e.preventDefault()
        setNuevoPokemon({
            ...nuevoPokemon,
            [e.target.name]: e.target.value,
        })
    }
    
    function onSubmit(e){
        e.preventDefault()
        axios.post('http://localhost:3001/addpokemon' , nuevoPokemon)
        .then((response)=>{
            dispatch(pokeFetch())
            history.push('/pokemain');
        })
         
    }
    return<div className={style.contenedorForm}>
    <form onSubmit={onSubmit}>
    <div className={style.contenedorInputs}>
        <label>Nombre: </label> <input name="name" type="text" value={nuevoPokemon.name} onChange={onInputChangeName}/>

        <label>Imagen: </label> <input name="image" type="url" value={nuevoPokemon.image} onChange={onInputChange}/>

        <label>PS: </label> <input name="life" type="number" value={nuevoPokemon.life} onChange={onInputChange}/>

        <label>Fuerza: </label> <input name="strenght" type="number" value={nuevoPokemon.strenght} onChange={onInputChange}/>

        <label>Defensa: </label> <input name="defense" type="number" value={nuevoPokemon.defense} onChange={onInputChange}/>

        <label>Velocidad: </label> <input name="speed" type="number" value={nuevoPokemon.speed} onChange={onInputChange}/>

        <label>Altura: </label> <input name="height" type="number" value={nuevoPokemon.height} onChange={onInputChange}/>

        <label>Peso: </label> <input name="weight" type="number" value={nuevoPokemon.weight} onChange={onInputChange}/>
    </div>    
        <div className={style.contenedorCheckbox}>
        {renderTypes(types)}
        </div>
        <input type="submit" className = {style.buttonSumbit}/>
    </form>
    </div>
}