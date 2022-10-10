import React from 'react';
//import {spinner} from '../../utils/spinner/spinner.js';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, //useState 
} from 'react';
import { getRecipeDetail} from '../../../redux/actions/recipeactions';
import { useParams } from 'react-router-dom';
import { NavBar } from '../../utils/nav/nav';

//import {check} from "./check.png"

import style from './detail.css'

const RecipeDetail =()=>{
    
    const dispatch = useDispatch();
    const { id } = useParams();
    //const [recipeDetail, setRecipeDetail ] = useState({})
    const recipe = useSelector(state => state.recipes.detail)
    //setRecipeDetail(recipe)  

    useEffect(() => {
        dispatch(getRecipeDetail(id));
        console.log(recipe,'ESTAMOS MOSTRANDO RECETA API')
    },[])
    
     return(
<div className='detalles'>
<NavBar />

<div class="wrapper2">
<h1 className="name1">{recipe.name}</h1>
      <a action="">
        <p>
        <h4 className="scrollable">Diet/s</h4>
                {recipe.createdInDB?(<p className="scrollable1">{recipe.diets[0].name}</p>):<p className="scrollable1">{recipe.diets}</p>}
        </p>

        <p>
        <h5 className="scrollable1">Health Score</h5>
                <li>{recipe.healthScore}</li> 
        </p>

         <p class="input-file-wrapper2">
        <img src={recipe.image} alt ='recipe' width={600}/>
        </p>

        <p>
        <h5 className="scrollable1">Summary</h5>
      {recipe.createdInDB?(<p>{recipe.summary}</p>):(<p className={style.sumary} dangerouslySetInnerHTML={{__html:recipe.summary}}/>)}
        </p>
      </a>
    </div>

    </div>


    )
}


export default RecipeDetail;