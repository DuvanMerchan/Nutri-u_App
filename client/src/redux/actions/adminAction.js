import axios from 'axios'
import { getAllRecipes, getAllUsers, getRecipeById, getUserById, banUser, banRecipe, postAdmin, updateUser } from '../adminSlice'


//-------------------- RUTAS --------------------------
//import {REACT_APP_HOST} from process.env
require('dotenv').config()
const url = process.env.REACT_APP_HOST || 'localhost:5001'



//-------------------- ACTIONS ------------------------
export const getRecipes = ()=> async (dispatch) => {
    try{
        let res = await axios.get(`http://${url}/recipes`)
        dispatch(getAllRecipes(res.data))
    }catch(e){
        console.log(e.message)
    }
}


export const getRecipeDetail =(id)=> async (dispatch) => {
    try{
        let res = await axios.get(`http://${url}/recipe/${id}`)
        dispatch(getRecipeById(res.data))
    }catch(e){
        console.log(e)
    }
}


export const getUserDetail = (id) => async (dispatch) => {
    try{
        let res = await axios.get(`http://${url}/user/admin/search/${id}`)
        dispatch(getUserById(res.data))
    }catch(e){
        console.log(e)
    }
}


export const getUsers = () => async (dispatch) => {
    try{
        
        let res = await axios.get(`http://${url}/user/admin/search`)
        console.log('res',res)
        dispatch(getAllUsers(res.data))
    }catch(e){
        console.log(e)
    }
}


export const banUserById = (id) => async (dispatch) => {
    try{
        let res = await axios.put(`http://${url}/user/admin/search/${id}`)
        dispatch(banUser(res.data))
    }catch(e){
        console.log(e)
    }
}


// export const banRecipeById = (id) => async (dispatch) => {
//     try{
//         let res = await axios.put(`http://${url}/recipe/admin/search/${id}`)
//         dispatch(banRecipe(res.data))
//     }catch(e){
//         console.log(e)
//     }
// }


export const newAdmin = (payload) => async (dispatch) => {
    try{
        let res = await axios.post(`http://${url}/user/admin/singin`, payload)
        dispatch(postAdmin(res.data))
    }catch(e){
        console.log(e)
    }
}


// export const updateUserById = (id, payload) => async (dispatch) => {
//     try{
//         let res = await axios.put(`http://${url}/user/admin/search/${id}`, payload)
//         dispatch(updateUser(res.data))
//     }catch(e){
//         console.log(e)
//     }
// }






