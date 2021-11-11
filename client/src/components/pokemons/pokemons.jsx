import React, { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { pokeFetch } from "../../actions";
import Pokemon from "./pokemon";
import style from './pokemons.module.css'
export default function Pokemons(){

let pokemons = useSelector((state)=>state.filteredPokemons);

const [currentPage , setCurrentPage] = useState(1);

const [itemsPerPage , setItemsPerPage] = useState(9); 

const pages = []; 

    
const [pageNumbreLimit ] = useState(5);
const [maxPageNumbreLimit , setMaxPageNumbreLimit] = useState(4);
const [minPageNumbreLimit , setMinPageNumbreLimit] = useState(0);



for(let i=1; i <= Math.ceil(pokemons.length/itemsPerPage) ; i++){
    pages.push(i);
};

const indexOfLastItem = currentPage * itemsPerPage; 

const indexOfFirstItem = indexOfLastItem - itemsPerPage; 

const currentItems = pokemons.slice(indexOfFirstItem , indexOfLastItem)

const handleClick=(e)=>{
    
    setCurrentPage(Number(e.target.id));
    
};

const handleClickNext = ()=>{
    setCurrentPage(currentPage + 1)
   
    if((currentPage + 1) > maxPageNumbreLimit ){
        setMaxPageNumbreLimit(maxPageNumbreLimit + pageNumbreLimit);
        setMinPageNumbreLimit(minPageNumbreLimit + pageNumbreLimit )
    }
};

const handleClickPrev = ()=>{
    setCurrentPage(currentPage - 1)
    
    if((currentPage - 1) % pageNumbreLimit === 0 ){
        setMaxPageNumbreLimit(maxPageNumbreLimit - pageNumbreLimit);
        setMinPageNumbreLimit(minPageNumbreLimit - pageNumbreLimit )
    }
};




const renderPageNumbers = pages.map((number)=>{
    if(number < maxPageNumbreLimit + 1 && number>minPageNumbreLimit){
        return(
            <li key={number} id={number} onClick={handleClick} className ={currentPage === number ? "active" : null /*esto es para el css*/}> 
                {number}
            </li>
        )
    }else{
        return null;
    }
});

let dispatch = useDispatch();

useEffect(()=>{
if(pokemons.length === 0){
dispatch(pokeFetch())    
}
},[dispatch , pokemons.length])

useEffect(()=>{
if(currentPage !== 1){
    setItemsPerPage(12)
}else{
    setItemsPerPage(9)
}
},[currentPage])

const renderPokemon = (items)=>{
    let pokeArray = items.map((pokemon , index)=>{        
        return <Pokemon key={index} pokemon = {pokemon}/>
    })
      
    return <>
        {pokeArray}
    </>
} 



return(
    <>
    {
        pokemons.length > 0 ? <>
    <div className= {style.bodyPokemons}>
    <div className = {style.contenedorPokemon}>
    {renderPokemon(currentItems)}
    </div>    
    <ul className= {style.pageNumbers}>
        <li>
            <button onClick={handleClickPrev} disabled={currentPage === pages[0]?true : false} >Back</button>
        </li>
        
    {renderPageNumbers}
        
        <li>
            <button onClick={handleClickNext} disabled={currentPage === pages[pages.length-1]?true : false} >Next</button>
        </li>
    </ul>
    </div>
        </>:
        <img src='https://pa1.narvii.com/7359/696a2348274d41f3f9029e7ab0628b0c3057a9f8r1-500-250_hq.gif' className={style.loading} alt=""/>
    }
    </>
    );
}





