import axios from 'axios'
import {getAllRecipes, getRecipeById, getRecipesByName, createRecipe, deleteRecipe, orderByRating} from '../recipeSlice'

//-------------------- RUTAS --------------------------
const url = ''


//-------------------- ACTIONS ------------------------
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


export const getRecipesByName = async (dispatch) => {
    try{
        let res = await axios.get()
        dispatch(getRecipesByName(res.data))
    }catch(e){
        console.log(e)
    }
}


export const postRecipe = async (dispatch) => {
    try{
        let res = await axios.post()
        dispatch(createRecipe(res.data))
    }catch(e){
        console.log(e)
    }
}


export const deleteRecipe = async (dispatch) => {
    try{
        let res = await axios.delete()
        dispatch(deleteRecipe(res.data))
    }catch(e){
        console.log(e)
    }
}


export const orderByRating = async (dispatch) => {
    try{
        dispatch(orderByRating(res.data))
    }catch(e){
        console.log(e)
    }
}
