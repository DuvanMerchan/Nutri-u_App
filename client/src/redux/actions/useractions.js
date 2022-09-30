import axios from 'axios'
import {getUserById, getUserStatus, createUser, deleteUser} from '../userSlice'

//-------------------- RUTAS --------------------------
const url = ''


//-------------------- ACTIONS -----------------------
export const getUserDetail = async (dispatch) => {
    try{
        let res = await axios.get()
        dispatch(getUserById(res.data))
    }catch(e){
        console.log(e)
    }
}


export const getUserStatus = async (dispatch) => {
    try{
        let res = await axios.get()
        dispatch(getUserStatus(res.data))
    }catch(e){
        console.log(e)
    }
}


export const postUser = async (dispatch) => {
    try{
        let res = await axios.post()
        dispatch(createUser(res.data))
    }catch(e){
        console.log(e)
    }
}


export const deleteUser = async (dispatch) => {
    try{
        let res = await axios.delete()
        dispatch(deleteUser(res.data))
    }catch(e){
        console.log(e)
    }
}
