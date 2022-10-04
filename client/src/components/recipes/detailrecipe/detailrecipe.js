import React from 'react';
//import {spinner} from '../../utils/spinner/spinner.js';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, //useState 
} from 'react';
import { getRecipeDetail} from '../../../redux/actions/recipeactions';
import { useParams } from 'react-router-dom';
import { NavBar } from '../../utils/nav/nav';

import style from './detail.module.css'

const RecipeDetail =()=>{
    
    const dispatch = useDispatch();
    const { id } = useParams();
    //const [recipeDetail, setRecipeDetail ] = useState({})
    const recipe = useSelector(state => state.recipes.detail)
    //setRecipeDetail(recipe)  

    useEffect(() => {
        dispatch(getRecipeDetail(id));
        console.log(recipe)
    },[])
    
     return(
        <div>
            <NavBar />
             
            <div className={style.detailContainer}>
                <h1>Recipe Name</h1>
                <h4>{recipe.name}</h4>
                <img src={recipe.image} alt ='recipe'/>
                <h1>Summary</h1>
                <p className={style.sumary} dangerouslySetInnerHTML={{__html:recipe.summary}}/>
                <h1>Diet/s</h1>
                <p>{recipe.diets}</p>
                {/* {
                    recipe.diets.map(e => {
                        <p>{e}</p>
                    })
                } */}
                <h1>Health Score</h1>
                <h2>{recipe.healthScore}</h2> 
                <h1>Is Vegetarian?</h1>
                <h2>{recipe.vegetarian? 'Yes': 'Not'}</h2>
                <h1>Is Vegan?</h1>
                <h2>{recipe.vegan? 'Yes': 'Not'}</h2>
                <h1>Is Gluten free?</h1>
                <h2>{recipe.glutenFree? 'Yes': 'Not'}</h2>
                <h1>Is Dairy free?</h1>
                <h2>{recipe.dairyFree? 'Yes': 'Not'}</h2>
                <h1>Is Healthy?</h1>
                <h2>{recipe.veryHealthy? 'Yes': 'Not'}</h2>
                {/* <h1>Ingredients</h1>
                {
                    recipe.extendedIngredients.map(e => {
                        return(
                            <h4 key={e.id}>{e.name}</h4>
                        )
                    })
                }
                <h1>Instructions</h1>
                <p>{recipe.instructions}</p> */}
            </div>
         
        {/* <spinner/> */}
        </div>
    
    )
}


export default RecipeDetail;