import React, { useEffect } from "react";
import { Card } from "./card/card";
import { getRecipes } from "../../../redux/actions/recipeactions";
import { useDispatch, useSelector } from "react-redux";


export const Cards = () => {
    const dispatch = useDispatch();
    const {recipes} = useSelector((state) => state.recipes);

    useEffect(() => {
        dispatch(getRecipes())
    }, []);
    console.log('recipes',recipes)
    return (
        <div>
            <h1>RECIPES</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                
                {recipes.map((el)=>{
                
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