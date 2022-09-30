import axios from 'axios'
import {getAllRecipes, getRecipeById} from '../recipeSlice'



export const getRecipes = async (dispatch) => {
    try{
        let res = await axios.get()
        dispatch(getAllRecipes(res.data))
    }catch(e){
        console.log(e)
    }
}


export const getRecipeDetail = async (dispatch) => {
    try{
        let res = await axios.get()
        dispatch(getRecipeById(res.data))
    }catch(e){
        console.log(e)
    }
}