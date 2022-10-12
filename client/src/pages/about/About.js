import React from "react";
import { NavBar } from "../../components/utils/nav/nav";
import "./About.css"
import subimg1 from "./subimg1.jpg"

export const About =()=>{
    
     return(

<div className='about'>

    <NavBar />

<div className="about1">

<div className="aboutc">

  <h5 className="about2">
    Our main objective as a recipe application is to be able to link nutrition professionals with users interested in carrying out a good diet.
  </h5>

    <div className="about3">

        <li className="aboutli">How do we get a user to enter the application?</li>
            
            <p className="aboutp">The main interest of the consumer is to be able to seize a large quantity and diversity of information in order to be able to formulate new food recipes and healthier food regimens with the particular purpose of each one of them.</p>
        
        <li className="aboutli">Why would nutritionists be interested in subscribing?</li> 
           
           <p className="aboutp">One of the essential goals for today's professionals is to reach their own personal brand, taking into account a network of clients who are expected to the proposed services of daily, monthly and annual food regimens.</p>
        
        <li className="aboutli">What does the application offer? </li>
            
            <p className="aboutp">A large database of food recipes with their own ingredients, as well as the possibility of adding them within each user profile with the idea of ​​personalizing the user experience, as well as being able to link those who need training and experience in the culinary aspect.</p>
        
        <li className="aboutli">what do we get from Nutri-u App? </li>
            
            <p className="aboutp">Grant knowledge to those users who lack gastronomic training in order to improve their quality of life, as well as achieve a network of professional contacts who can offer their services promoting work and equal opportunities for everyone.</p>
    

        </div>
    </div>
  
</div>
</div>
  
  )
}

