import React from "react";
import "./paginado.css"
import { useState } from "react";

export default function Paginado({recipesPerPage, recipes, paginado, currentPage}){
    const pageNumbrers = []
    // eslint-disable-next-line
    const [paginadoCss, setPaginadoCss] = useState("PaginadoNum")
    
    
   
    for (let i = 1; i <= Math.ceil(recipes/recipesPerPage); i++) {
        
        pageNumbrers.push(i)
    }
    return(
        <nav className='Paginado'>
            
            <div className="container xlarge">
            <div className="pagination">  
           
            <ul className ='ul'>
            <button className="Paginado1" disabled ={currentPage<=1} onClick={()=> paginado(currentPage -1) }>{"<<"}</button>
                {pageNumbrers && 
                pageNumbrers.map(number =>(
                    // eslint-disable-next-line
                    <li className ={currentPage==number?paginadoCss:"PaginadoNum2"} key={number}>
                        
                        <a  href onClick={()=>paginado(number)}> {number}</a>  
                    </li> 
                    
                ))}
            <button className="Paginado1" disabled={pageNumbrers.length < currentPage+1?true:false} onClick={()=>paginado(currentPage + 1)}>{">>"}</button>    
            </ul>
            </div>
            </div>
            
        </nav>
    )
}