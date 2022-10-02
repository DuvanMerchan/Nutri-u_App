import React from "react";

export const Card = ({id, title, diets, image, healthScore})=>{
    

    return(
        

<div className="col">
    <div id={id} className="card h-100">
      <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{diets}</p>
        <p className="card-text">{healthScore}</p>
        
      </div>
    </div>
  </div>
        

    )
}