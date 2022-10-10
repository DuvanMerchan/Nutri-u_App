import axios from "axios";
import { //filterByDiet, 
    getAllDiets, getDietDetail, getDietByName } from "../dietsSlice";

require('dotenv').config()
const url = process.env.REACT_APP_HOST || 'localhost:5001'


export const getDiets =()=>async (dispatch)=>{
    try {
        let res = await axios.get(`http://${url}/diets`)
        dispatch(getAllDiets(res.data))
    } catch (error) {
        console.log(error)
    }
}

export const getDetail =(id)=>async (dispatch)=>{
    try {
        let res = await axios.get(`http://${url}/diets/${id}`)
        dispatch(getDietDetail(res.data))
    } catch (error) {
        console.log(error)
    }
}
export const getByName =(name)=>async (dispatch)=>{
    try {
        let res = await axios.get(`http://${url}/diets?${name}`)
        dispatch(getDietByName(res.data))
    } catch (error) {
        console.log(error)
    }
}

// export const filterDiet =(payload)=>async (dispatch)=>{
//     try {
//         dispatch(filterByDiet(payload))
//     } catch (error) {
//         console.log(error)
//     }
// }