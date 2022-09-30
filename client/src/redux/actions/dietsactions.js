import axios from "axios";
import { filterByDiet, getAllDiets, getDietDetail } from "../dietsSlice";


export const getDiets =()=>async (dispatch)=>{
    try {
        let res = await axios.get()
        dispatch(getAllDiets(res.data))
    } catch (error) {
        console.log(error)
    }
}

export const getDetail =()=>async (dispatch)=>{
    try {
        let res = await axios.get()
        dispatch(getDietDetail(res.data))
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