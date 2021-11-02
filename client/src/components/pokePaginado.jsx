import React, { useState } from "react";

export default function PokePaginado(){

    const [data , setData] = useState([]);// este state es el de los pokemons

    const [currentPage , setCurrentPage] = useState(1);// pagina en la que estoy ubicado

    const [itemsPerPage , setItemsPerPage] = useState(12); // cantidad de renders por pagina

    const pages = []; // cantidad de paginas en base a la cantidad de pokemons / render por pagina

    //los siguientes estados son para limitar la cantidad de paginas que se muestren en la barra de paginas
    const [pageNumbreLimit , setPageNumbreLimit] = useState(5);
    const [maxPageNumbreLimit , setMaxPageNumbreLimit] = useState(5);
    const [minPageNumbreLimit , setMinPageNumbreLimit] = useState(0);



    for(let i=1; i <= Math.ceil(data.length/itemsPerPage) ; i++){
        pages.push(i);
    };

    const indexOfLastItem = currentPage * itemsPerPage; // numero del ultimo renderizado , referencia para la proxima pagina
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // numero del primer render de la pagina
    const currentItems = data.slice(indexOfFirstItem , indexOfLastItem)

    const handleClick=(e)=>{
        setCurrentPage(Number(e.target.id));
    };
    const handleClickNext = ()=>{
        setCurrentPage(currentPage + 1)
        if((currentPage + 1) > maxPageNumbreLimit ){
            setMaxPageNumbreLimit(maxPageNumbreLimit + pageNumbreLimit);
            setMinPageNumbreLimit(minPageNumbreLimit + pageNumbreLimit )
        }
    } // funcion para el boton next 
    const handleClickPrev = ()=>{
        setCurrentPage(currentPage - 1)
        if((currentPage - 1) % pageNumbreLimit == 0 ){
            setMaxPageNumbreLimit(maxPageNumbreLimit - pageNumbreLimit);
            setMinPageNumbreLimit(minPageNumbreLimit - pageNumbreLimit )
        }
    }// funcion para el boton prev

    let pageIncrementBtn = null;
    if(pages.length> maxPageNumbreLimit){
        pageIncrementBtn = <li onClick ={handleClickNext}>&hellip;</li>
    }

    let pageDectrementBtn = null;
    if(pages.length> maxPageNumbreLimit){
        pageDectrementBtn = <li onClick ={handleClickPrev}>&hellip;</li>
    }

    // estos dos botones son los famosos tres puntos que nos dicen que hay mas paginas existentes 


    const renderPageNumebers = pages.map((number)=>{
        if(number < maxPageNumbreLimit + 1 && number>minPageNumbreLimit){
            return(
                <li key={number} id={number} onClick={handleClick} className ={currentPage == number ? "active" : null /*esto es para el css*/}> 
                    {number}
                </li>
            )
        }else{
            return null;
        }
    }); //renderizado numero de paginas , la barra de abajo de todo (o arriba )

    const renderData = (data)=>{
        <ul>
            {data.map((todo,index)=>{
                return <li key={index}>{todo.title}</li>
            })}
        </ul>
    } // funcion para renderizar los pokemons
    return(
    <>

    {renderData(currentItems)}

    <ul className= 'pageNumbers'>
        <li>
            <button onClick={handleClickPrev} disabled={currentPage == pages[0]?true : false} /*agregar css si no se va a ver horrible*/>Previous</button>
        </li>
        {pageDectrementBtn}
    {renderPageNumebers}
        {pageIncrementBtn}
        <li>
            <button onClick={handleClickNext} disabled={currentPage == pages[pages.length-1]?true : false} >Next</button>
        </li>
    </ul>

    </>
    );
}