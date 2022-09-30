import axios from 'axios'
import {getAllRecipes, getRecipeById} from '../recipeSlice'

//-------------------- RUTAS --------------------------
const url = ''

//-------------------- ACTION TYPES --------------------
export const GET_All_RECIPES = 'GET_ALL_RECIPES'
export const GET_RECIPE_BY_ID = 'GET_RECIPE_BY_ID'
export const GET_RECIPE_BY_NAME = 'GET_RECIPE_BY_NAME'
export const CREATE_RECIPE = 'CREATE_RECIPE'
export const DELETE_RECIPE = 'DELETE_RECIPE'
export const ORDER_BY_RATING = 'ORDER_BY_RATING'


//-------------------- ACTION CREATORS --------------------
// export const getRecipes =()=>(dispatch)=>{
//     axios(url)
//     .then(res=>dispatch(getAllRecipes(res.data)))
//     .catch(e=>console.log(e))
// }

export function getAllRecipes() {
    return function (dispatch) {
        return axios.get(`${url}`)
        .then (recipes => dispatch({type: GET_ALL_RECIPES, payload: recipes.data}))
        .catch (error => alert ('Sorry, I cant get all the recipes', error.message));
    };
};


export function getRecipeById(id) {
    return function (dispatch) {
        return axios.get(`${url}/${id}`)
        .then (recipe => dispatch({type: GET_RECIPE_BY_ID, payload: recipe.data}))
        .catch (error => alert ('Sorry, I cant get that recipe', error.message));
    };
};


export function getRecipeByName(name) {
    return function (dispatch) {
        return axios.get(`${url}?name=${name}`)
        .then (recipe => dispatch({type: GET_RECIPE_BY_NAME, payload: recipe.data}))
        .catch (error => alert ('Sorry, I cant get that recipe', error.message));
    };
};


export function createRecipe(payload) {
    return function (dispatch) {
        return axios.post(`${url}`, payload)
        .then (newRecipe => dispatch({type: CREATE_RECIPE, payload: newRecipe.data}))
        .catch (error => alert ('Sorry, I cant create that recipe', error.message));
    };
};


export function deleteRecipe(id) {
    return function (dispatch) {
        return axios.delete(`${url}/${id}`)
        .then (recipe => dispatch({type: DELETE_RECIPE, payload: recipe.data}))
        .catch (error => alert ('Sorry, I cant delete that recipe', error.message));
    };
}


export function orderByRating(payload) {
    return function (dispatch) {
        return dispatch({type: ORDER_BY_RATING, payload})
    };
};






