import axios from "axios"
import { filterByIngredient, getAllIngredients, getIngredientDetail } from "../ingredientSlice"
import dotenv from 'dotenv'
dotenv.config()
const url = process.env.REACT_APP_HOST 


export const getIngredients = async (dispatch) =>{
    try {
        let res = await axios.get()
        dispatch(getAllIngredients(res.data))
    } catch (error) {
        console.log(error)
    }
}

export const getDetail = async (dispatch) =>{
    try {
        let res = await axios.get()
        dispatch(getIngredientDetail(res.data))
    } catch (error) {
        console.log(error)
    }
}

export const filterIngredient = async (dispatch) =>{
    try {
        dispatch(filterByIngredient(payload))
    } catch (error) {
        console.log(error)
    }
}