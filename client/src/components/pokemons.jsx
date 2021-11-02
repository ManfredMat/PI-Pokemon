import React, { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { pokeFetch } from "../actions";
import Pokemon from "./pokemon";

export default function Pokemons(){

let pokemons = useSelector((state)=>state.filteredPokemons);

const [currentPage , setCurrentPage] = useState(1);

const [itemsPerPage , setItemsPerPage] = useState(12); 

const pages = []; 

    
const [pageNumbreLimit , setPageNumbreLimit] = useState(5);
const [maxPageNumbreLimit , setMaxPageNumbreLimit] = useState(5);
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
    if((currentPage - 1) % pageNumbreLimit == 0 ){
        setMaxPageNumbreLimit(maxPageNumbreLimit - pageNumbreLimit);
        setMinPageNumbreLimit(minPageNumbreLimit - pageNumbreLimit )
    }
};


let pageIncrementBtn = null;

if(pages.length> maxPageNumbreLimit){
    pageIncrementBtn = <li onClick ={handleClickNext}>&hellip;</li>
};


let pageDectrementBtn = null;

if(pages.length> maxPageNumbreLimit){
    pageDectrementBtn = <li onClick ={handleClickPrev}>&hellip;</li>
};

const renderPageNumbers = pages.map((number)=>{
    if(number < maxPageNumbreLimit + 1 && number>minPageNumbreLimit){
        return(
            <li key={number} id={number} onClick={handleClick} className ={currentPage == number ? "active" : null /*esto es para el css*/}> 
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
else{console.log(pokemons.length)}
},[])

const renderPokemon = (items)=>{
    let pokeArray = items.map((pokemon , index)=>{        
        return <Pokemon key={index} pokemon = {pokemon}/>
    })
      
    return <div>
        {pokeArray}
    </div>
} 



return(
    <>
    <div>
    {renderPokemon(currentItems)}
    </div>

    <ul className= 'pageNumbers'>
        <li>
            <button onClick={handleClickPrev} disabled={currentPage == pages[0]?true : false} /*agregar css si no se va a ver horrible*/>Previous</button>
        </li>
        {pageDectrementBtn}
    {renderPageNumbers}
        {pageIncrementBtn}
        <li>
            <button onClick={handleClickNext} disabled={currentPage == pages[pages.length-1]?true : false} >Next</button>
        </li>
    </ul>

    </>
    );
}





