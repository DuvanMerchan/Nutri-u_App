import React from "react";

export const Card = ({id,image,name, healthScore})=>{
    

    return(
        

<div className="col">
    <div id={id} className="card h-100">
      <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{healthScore}</p>
        
      </div>
    </div>
  </div>
        

    )
}