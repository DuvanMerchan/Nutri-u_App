import React from "react";

export const Card = ({id, title, diets, image, healthScore})=>{
    

    return(
        

<div class="col">
    <div id={id} class="card h-100">
      <img src={image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{diets}</p>
        <p class="card-text">{healthScore}</p>
        
      </div>
    </div>
  </div>
        

    )
}