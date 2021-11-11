import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterByType ,typeFetch} from "../../actions"
import style from './order_filter.module.css'

export default function FiltroByType(){
    let dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(typeFetch())
    },[dispatch])

    let types = useSelector((state)=>state.types)

    function onSelectChange(e){
        e.preventDefault();
        dispatch(filterByType(e.target.value))
    }

    const renderTypes = (types)=>{
  
        let tipos = types.map((type,index)=>{

                return (            
                <option value={type.name} key={index}>{type.name}</option>
                )

        })
        return tipos
    }


    return (
     <>   
    <select name="select" onChange={onSelectChange} className={style.filter} >
        <option value="">--SELECT--</option>
        <option value="ALL">ALL</option>
        {renderTypes(types)} 
    </select>    
    </>)
}