import axios from 'axios'
import { getUser, getUserById, getUserStatus, createUser, deleteUser} from '../userSlice'
import swal from 'sweetalert';


//-------------------- RUTAS --------------------------
const url = process.env.REACT_APP_HOST || 'localhost:5001'


//-------------------- ACTIONS -----------------------

export const loggedUser = async (dispatch) =>{
    try{
        let res = await axios.get()
    }catch(e){
        console.log(e.message)
    }
}

export const getUserDetail = async (dispatch) => {
    try{
        let res = await axios.get()
        dispatch(getUserById(res.data))
    }catch(e){
        console.log(e)
    }
}


export const getStatus = async (dispatch) => {
    try{
        let res = await axios.get()
        dispatch(getUserStatus(res.data))
    }catch(e){
        console.log(e)
    }
}


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

export const logIn = (email, password) => async (dispatch) =>{

    try {
        let res = await axios.post(`http://${process.env.REACT_APP_HOST}/user/login`, email, password)
        let res2 = JSON.parse(res.request.response)
        console.log('res',res2.user.user)
        dispatch(getUser(res2.user.user))

        window.sessionStorage.setItem(
            "userSession", JSON.stringify(res2.user.user) // guarda la sesion del usuario en el SessionStorage
        )
    } catch (e) {
        let respuesta = JSON.parse(e.request.response).message;
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
