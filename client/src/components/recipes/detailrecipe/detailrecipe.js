import React from 'react';
import spinner from '../../utils/spinner/spinner.js';
import { useDispatch, useSelector } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react';
import { getRecipeDetail, cleanRecipeDetail } from '../../../redux/actions/recipeactions';
import { useParams } from 'react-router-dom';

import style from './detail.module.css'

const RecipeDetail =()=>{
    
    const dispatch = useDispatch();
    const { id } = useParams();
    const recipe = useSelector(state => state.recipes.detail)

    useEffect(() => {
        dispatch(getRecipeDetail(id));  
    },[dispatch, id])

    return(
        recipe.title? ( // ta todo en un solo div grande, dsps modularizar
            <div className={style.detailContainer}>
                <h1>Recipe Name</h1>
                <h2>{recipe.title}</h2>
                <img src={recipe.image}/>
                <h1>Summary</h1>
                <p>{recipe.summary}</p>
                <h1>Diet/s</h1>
                <p>{recipe.diets}</p>
                <h1>Health Score</h1>
                <h2>{recipe.healthScore}</h2> // añadir esto a la ruta del back
                <h1>Is Vegetarian?</h1>
                <h2>{recipe.vegetarian}</h2>
                <h1>Is Vegan?</h1>
                <h2>{recipe.vegan}</h2>
                <h1>Is Gluten free?</h1>
                <h2>{recipe.glutenFree}</h2>
                <h1>Is Dairy free?</h1>
                <h2>{recipe.dairyFree}</h2>
                <h1>Is Healthy?</h1>
                <h2>{recipe.veryHealthy}</h2>
                <h1>Ingredients</h1>
                {
                    recipe.extendedIngredients.map(e => {
                        return(
                            <h4 key={e.id}>{e.name}</h4>
                        )
                    })
                }
                <h1>Instructions</h1>
                <p>{recipe.instructions}</p>
            </div>
        ) : <spinner/>
    )
}


export default RecipeDetail;