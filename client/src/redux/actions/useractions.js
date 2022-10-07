import axios from 'axios'
import {getUserById, getUserStatus, createUser, deleteUser} from '../userSlice'
import swal from 'sweetalert';

//-------------------- RUTAS --------------------------
const url = process.env.REACT_APP_HOST || 'localhost:5001'


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
        let res = await axios.post(`http://${process.env.REACT_APP_HOST}/user/singin`, payload)
        console.log(res, 'res')
        
        swal(res.data.message)
    }catch(e){
        let respuesta= JSON.parse(e.request.response).message;
        console.log(respuesta)
        swal(respuesta)
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
