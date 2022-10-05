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


// export const getUserStatus = async (dispatch) => {
//     try{
//         let res = await axios.get()
//         dispatch(getUserStatus(res.data))
//     }catch(e){
//         console.log(e)
//     }
// }


export const postUser =(payload)=> async (dispatch) => {
    try{
        let res = await axios.post(`http://${process.env.REACT_APP_HOST}/user/users/singin`, payload)
        console.log(res, 'res')
    }catch(e){
        console.log(e)
    }
}


// export const deleteUser = async (dispatch) => {
//     try{
//         let res = await axios.delete()
//         dispatch(deleteUser(res.data))
//     }catch(e){
//         console.log(e)
//     }
// }
