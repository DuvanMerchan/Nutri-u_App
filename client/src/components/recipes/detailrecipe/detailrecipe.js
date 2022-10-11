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

<div className="detail1">

  
      <div className="detail2">
        <h1 className="font1">{recipe.name}</h1>
      </div>

        <div className="detail3">

        <h4>Diet/s</h4>
            {recipe.createdInDB?(<p>{recipe.diets[0].name}</p>):<p>{recipe.diets}</p>}

        <h5>Health Score</h5>
                <li>{recipe.healthScore}</li> 
        </div>

        <div className="detail6">
          <button>Fauvorite</button>
        </div>

        <div className="detail4">
            <h5>Summary</h5>
            {recipe.createdInDB?(<p>{recipe.summary}</p>):(<p dangerouslySetInnerHTML={{__html:recipe.summary}}/>)}
        </div>
        
        <div className="detail5">
          <img className="fontimg" src={recipe.image} alt ='recipe' width={700}/>
        </div>
    </div>
    </div>
    )
}


export default RecipeDetail;