import axios from 'axios'
import {getAllRecipes, 
    //getRecipeById, getRecipesByName, createRecipe, deleteRecipe, orderByRating
} from '../recipeSlice'

//-------------------- RUTAS --------------------------

//import {REACT_APP_HOST} from process.env

//-------------------- ACTIONS ------------------------
export const getRecipes = ()=> async (dispatch) => {
    try{
        let res = await axios.get(`http://localhost:5001/recipes`)
        dispatch(getAllRecipes(res.data))
    }catch(e){
        console.log(e)
    }
}


// export const getRecipeDetail = async (dispatch) => {
//     try{
//         let res = await axios.get(`http://${process.env.REACT_APP_HOST}/recipe/${id}`)
//         dispatch(getRecipeById(res.data))
//     }catch(e){
//         console.log(e)
//     }
// }


// export const getByName = async (dispatch) => {
//     try{
//         let res = await axios.get(`http://${process.env.REACT_APP_HOST}/recipes?${name}`)
//         dispatch(getRecipesByName(res.data))
//     }catch(e){
//         console.log(e)
//     }
// }


// export const postRecipe = async (dispatch) => {
//     try{
//         let res = await axios.post(`http://${process.env.REACT_APP_HOST}/recipe`)
//         dispatch(createRecipe(res.data))
//     }catch(e){
//         console.log(e)
//     }
// }


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
