import axios from 'axios'
import {getAllRecipes, orderByRating, getRecipesByName,
    getRecipeById,createRecipe, filterByDiet//getRecipesByName, createRecipe, deleteRecipe, orderByRating
} from '../recipeSlice'


//-------------------- RUTAS --------------------------

//import {REACT_APP_HOST} from process.env
require('dotenv').config()

//-------------------- ACTIONS ------------------------
export const getRecipes = ()=> async (dispatch) => {
    try{
        let res = await axios.get(`http://localhost:5000/recipes`)
        dispatch(getAllRecipes(res.data))
        let res2 = await axios.get(`http://localhost:5000/diets`)
        dispatch(getDiets_Recipe(res2.data))
    }catch(e){
        console.log(e.message)
    }
}


export const orderForRating = (payload)=> async (dispatch)=>{
    try {
        dispatch(orderByRating(payload))
    } catch (error) {
        
    }

}


export const getRecipesName = (payload)=> async (dispatch)=>{
    try {
        let res = await axios.get(`http://localhost:5000/recipes?name=${payload}`)
        dispatch(getRecipesByName(res.data))
    } catch (error) {
        
    }
}

export const getRecipeDetail =(id)=> async (dispatch) => {
    try{
        let res = await axios.get(`http://localhost:5000/recipe/${id}`)
        dispatch(getRecipeById(res.data))
    }catch(e){
        console.log(e)
    }
}

export const filterDiet =(payload)=>async (dispatch)=>{
    try {
        dispatch(filterByDiet(payload))
    } catch (error) {
        console.log(error)
    }
}


// export const getByName = async (dispatch) => {
//     try{
//         let res = await axios.get(`http://${process.env.REACT_APP_HOST}/recipes?${name}`)
//         dispatch(getRecipesByName(res.data))
//     }catch(e){
//         console.log(e)
//     }
// }


export const postRecipe = async (dispatch) => {
    try{
        let res = await axios.post(`http://${process.env.REACT_APP_HOST}/recipe`)
        dispatch(createRecipe(res.data))
    }catch(e){
        console.log(e)
    }
}


// export const deleteRecipeByID = async (dispatch) => {
//     try{
//         let res = await axios.delete()
//         dispatch(deleteRecipe(res.data))
//     }catch(e){
//         console.log(e)
//     }
// }


// export const orderRating = async (dispatch) => {
//     try{
//         dispatch(orderByRating(res.data))
//     }catch(e){
//         console.log(e)
//     }
// }
