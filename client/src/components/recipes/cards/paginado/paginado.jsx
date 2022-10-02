import React from "react";
import "./paginado.css"
import { useState } from "react";

export default function Paginado({recipesPerPage, recipes, paginado, currentPage}){
    const pageNumbrers = []
    const [paginadoCss, setPaginadoCss] = useState("PaginadoNum")
    
    
   
    for (let i = 1; i <= Math.ceil(recipes/recipesPerPage); i++) {
        
        pageNumbrers.push(i)
    }
    return(
        <nav className='Paginado'>
            <button disabled ={currentPage<=1} onClick={()=> paginado(currentPage -1) }>Back</button>
                
            <ul className ='ul'>
                {pageNumbrers && 
                pageNumbrers.map(number =>(
                    
                    <li className ={currentPage==number?paginadoCss:"PaginadoNum2"} key={number}>
                        
                        <a  href onClick={()=>paginado(number)}> {number}</a>  
                    </li> 
                    
                ))}
                
            </ul>
            <button disabled={pageNumbrers.length < currentPage+1?true:false} onClick={()=>paginado(currentPage + 1)}>Next</button>
        </nav>
    )
}