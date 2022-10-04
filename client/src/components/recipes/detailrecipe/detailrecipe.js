import React from 'react';
//import {spinner} from '../../utils/spinner/spinner.js';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, //useState 
} from 'react';
import { getRecipeDetail} from '../../../redux/actions/recipeactions';
import { useParams } from 'react-router-dom';
import { NavBar } from '../../utils/nav/nav';

import {check} from "./check.png"

import style from './detail.css'

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
<div class="container-fluid">
      <div >
    <h1 className="rowtop">{recipe.name}</h1>

      </div>

      <div class="row main-content">
            <h4 className="scrollable">Diet/s</h4>
                <p className="scrollable1">{recipe.diets}</p>
        <div class="col-md-4">
        
            <div class="sub-header">
            </div>

            <div className="scrollable">
                <h5 className="scrollable1">Health Score</h5>
                <li>{recipe.healthScore}</li> 
                <h5 className="scrollable1">Is Vegetarian?</h5>
                <li>{recipe.vegetarian? 'Yes': 'Not'}</li>
                <h5 className="scrollable1">Is Vegan?</h5>
                <li>{recipe.vegan? 'Yes': 'Not'}</li>
                <h5 className="scrollable1">Is Gluten free?</h5>
                <li>{recipe.glutenFree? 'Yes': 'Not'}</li>
                <h5 className="scrollable1">Is Dairy free?</h5>
                <li>{recipe.dairyFree? 'Yes': 'Not'}</li>
                <h5 className="scrollable1">Is Healthy?</h5>
                <li>{recipe.veryHealthy? 'Yes': 'Not'}</li>
            </div>

            <div class="sub-footer">

            </div>

        </div>

        <div class="col-md-8 scrollable">
        <img src={recipe.image} alt ='recipe' width={800}/>
        </div>

      </div>

      <div className="rowbottom">
      <p className={style.sumary} dangerouslySetInnerHTML={{__html:recipe.summary}}/>
      </div>

    </div>

    </div>


    )
}


export default RecipeDetail;