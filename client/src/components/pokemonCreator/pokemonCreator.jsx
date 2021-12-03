import axios from "axios"
import { useState , useEffect} from "react"
import { useDispatch , useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { pokeFetch } from "../../actions";
import { typeFetch } from "../../actions";
import style from './pokemonCreator.module.css'


export default function PokeCreator(){

    const [errors, setErrors] = useState({});      

    let dispatch = useDispatch();

    let history = useHistory();
    

    const[nuevoPokemon , setNuevoPokemon] =useState({
        name:null,
        image:"",
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
    },[dispatch])

    const renderTypes = (types)=>{
  
        let tipos = types.map((type,index)=>{

                return (            
                <label  className={style.checkboxLabel} key={index}><input type="checkbox" name={type.id}  value ="" onChange={(e)=>{handlerTypes(e)}}/>{type.name}</label>
                )

        })
        return tipos        
    } 
    function handlerTypes(e){
        e.preventDefault()

        let arrTypes=nuevoPokemon.type;

        if(arrTypes.includes(e.target.name)){
            arrTypes = arrTypes.filter(id => id !== e.target.name )
        
        }else{
    
       
        arrTypes.push(e.target.name)
        
        }
        console.log(arrTypes)
        setNuevoPokemon({
            ...nuevoPokemon,
            type:arrTypes
        })
        
    }
    function onInputChangeName(e){
        e.preventDefault()
        setNuevoPokemon({
            ...nuevoPokemon,
            [e.target.name]: e.target.value.toLowerCase(),
        })
        setErrors(validate({
            ...nuevoPokemon,
            [e.target.name]:e.target.value
        }))
    }
    function onInputChange(e){
        e.preventDefault()
        console.log(typeof e.target.value)
        setNuevoPokemon({
                ...nuevoPokemon,
                [e.target.name]: e.target.value,
            })    
        
    }
    
    function onSubmit(e){
        e.preventDefault()
        
        if(nuevoPokemon.name !== null ){
            axios.post('/addpokemon' , nuevoPokemon)
            .then((response)=>{
                dispatch(pokeFetch())
                history.push('/pokemain');
            })
                       
        }else{
        alert("Your pokemon need's a name ")
        }

         
    }

    function validate(input) {

        let errors = {};
            
        if (!input.name ) {
          errors.name = "Your pokemon need's a name"  ;
        }     
      
        return errors;
      };
     


    return<div className={style.contenedorForm}>
    <form onSubmit={onSubmit}>
    <div className={style.contenedorInputs}>
        <label>Nombre: </label> <input className={errors.name && 'danger'} name="name" type="text" value={nuevoPokemon.name} onChange={onInputChangeName} />
        {errors.name && (
          <p className="danger">{errors.name}</p>
         )}  
        <label>Imagen: </label> <input name="image" type="url" value={nuevoPokemon.image} placeholder ="" onChange={onInputChange} />

        <label>PS: </label> <input name="life" type="number" min ="1" value={parseInt(nuevoPokemon.life)} onChange={onInputChange} />
        
        <label>Fuerza: </label> <input name="strenght"  min ="1" type="number" value={parseInt(nuevoPokemon.strenght)} onChange={onInputChange}/>

        <label>Defensa: </label> <input name="defense"  min ="1" type="number" value={parseInt(nuevoPokemon.defense)} onChange={onInputChange}/>

        <label>Velocidad: </label> <input name="speed" min ="1" type="number" value={parseInt(nuevoPokemon.speed)} onChange={onInputChange}/>

        <label>Altura: </label> <input name="height" min ="1" type="number" value={parseInt(nuevoPokemon.height)} onChange={onInputChange}/>

        <label>Peso: </label> <input name="weight" min ="1" type="number" value={parseInt(nuevoPokemon.weight)} onChange={onInputChange}/>
        
    </div>    
        <div className={style.contenedorCheckbox}>
        {renderTypes(types)}
        </div>
        <input type="submit" className = {style.buttonSumbit}/>
    </form>
    </div>
}