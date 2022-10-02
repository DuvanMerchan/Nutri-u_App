import React, { useState,useEffect } from "react";
import { Card } from "./card/card";
import "./cards.css"
import Paginado from "./paginado/paginado";
import { getRecipes } from "../../../redux/actions/recipeactions";
import { useDispatch, useSelector } from "react-redux";


export const Cards = () => {
    const dispatch = useDispatch();
    const {recipes} = useSelector((state) => state.recipes);


    //--------/PAGINADO/--------------------//
const [currentPage, setCurrentPage] = useState(1);  //act
const [recipesPerPage] = useState(6)
const lastCountry = currentPage * recipesPerPage ;  // 1 10
const firstCountry = lastCountry - recipesPerPage; // 10 - 10 .. 0
const currentRecipe = recipes.slice(firstCountry, lastCountry);   
const [, setOrden] = useState("");

const paginado = (pageNumber) => {
  setCurrentPage(pageNumber)
};
//---------------------------------------//


    useEffect(() => {
        dispatch(getRecipes())
    }, []);
    console.log('recipes',recipes)


    return (
        <div className="CardsRecipes">
            <h1>RECIPES</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                
                {currentRecipe.map((el)=>{
                
                  return(
                    <div id={el.id}>
                      <a href={"/recipes/" + el.id}  className="Links" >
                    <Card
                    id={el.id}
                    image={el.image}
                    name={el.name}
                    healthScore={el.healthScore}
                  />
                  </a>
                  </div>
                  )})}
                  
            </div>
            <Paginado
        
        recipesPerPage={recipesPerPage}
        recipes={recipes.length}
        paginado={paginado}
        currentPage = {currentPage}
        currentRecipe = {currentRecipe}
      />
        </div>

    )
}