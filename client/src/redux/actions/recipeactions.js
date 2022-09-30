import axios from 'axios'
import {getAllRecipes, getRecipeById} from '../recipeSlice'

const url = ''

export const getRecipes =()=>(dispatch)=>{
    axios(url)
    .then(res=>dispatch(getAllRecipes(res.data)))
    .catch(e=>console.log(e))
}