import axios from "axios";
import { filterByDiet, getAllDiets, getDietDetail, getDietByName } from "../dietsSlice";
import {REACT_APP_HOST} from process.env

export const getDiets =()=>async (dispatch)=>{
    try {
        let res = await axios.get(`http://${REACT_APP_HOST}/recipes`)
        dispatch(getAllDiets(res.data))
    } catch (error) {
        console.log(error)
    }
}

export const getDetail =(id)=>async (dispatch)=>{
    try {
        let res = await axios.get(`http://${REACT_APP_HOST}/recipe/${id}`)
        dispatch(getDietDetail(res.data))
    } catch (error) {
        console.log(error)
    }
}
export const getByName =(name)=>async (dispatch)=>{
    try {
        let res = await axios.get(`http://${REACT_APP_HOST}/recipes?${name}`)
        dispatch(getDietByName(res.data))
    } catch (error) {
        console.log(error)
    }
}

export const filterDiet =()=>async (dispatch)=>{
    try {
        dispatch(filterByDiet(payload))
    } catch (error) {
        console.log(error)
    }
}