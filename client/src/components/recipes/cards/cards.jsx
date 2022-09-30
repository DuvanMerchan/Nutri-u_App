import React, { useEffect } from "react";
import { Card } from "./card/card";
import { getAllRecipes } from "../../../redux/recipeSlice";
import { useDispatch, useSelector } from "react-redux";


export const Cards = () => {
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes);

    useEffect(() => {
        dispatch(getAllRecipes())


    }, [dispatch]);
console.log(recipes.recipes)
    return (
        <div>
            <h1>RECIPES</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                
                {recipes.recipes.map((el)=>{
                
                  return(  
                    <Card
                    id={el.id}
                    image={el.image}
                    title={el.title}
                    diets={el.diets[0]}
                    healthScore={el.healthScore}
                  />
                  )})}
            </div>
        </div>

    )
}