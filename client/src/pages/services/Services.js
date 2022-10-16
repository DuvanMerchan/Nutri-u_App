import React from "react";
import { NavBar } from "../../components/utils/nav/nav";
import "./Services.css"

export const Services =()=>{
    
     return(

<div className='services'>

    <NavBar />

<div className="services1">

<div className="servicesc">

  <h5 className="services2">
  some of the main features of Nutri-u APP
  </h5>

    <div className="services3">

        <li className="servicesli">Create a custom profile</li>
        <li className="servicesli">Explore different types of recipes</li>
        <li className="servicesli">Filter recipes according to your tastes</li>
        <li className="servicesli">Filter foods according to your health</li>
        <li className="servicesli">Choose the foods that you liked the most</li>
        <li className="servicesli">Once subscribed, be able to create recipes</li>
        <li className="servicesli">Being able to communicate with the best nutritionists</li>
        <li className="servicesli">Share with the best gastronomic community</li>
        <li className="servicesli">Share recipes with your friends</li>
        <li className="servicesli">Determine what your monthly meal plan will be</li>
        <li className="servicesli">Leave reviews of the best recipes you found</li>
            
        </div>
    </div>
  
</div>
</div>
  
  )
}

