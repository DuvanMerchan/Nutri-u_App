import axios from 'axios'
import { getUser, getUserById, getUserStatus, //createUser, deleteUser
} from '../userSlice'
import swal from 'sweetalert';


//-------------------- RUTAS --------------------------
const url = process.env.REACT_APP_HOST || 'localhost:5001'


//-------------------- ACTIONS -----------------------

// export const loggedUser = async (dispatch) =>{
//     try{
//         let res = await axios.get()
//     }catch(e){
//         console.log(e.message)
//     }
// }

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
        let res = await axios.post(`http://${url}/user/singin`, payload)
        console.log(res, 'res')
        swal({title:"Account created successfully, check your email to confirm it",icon: "success"}).then(function() {
            window.location.href = "/";
        })
    }catch(e){
        let respuesta= JSON.parse(e.request.response).message;
        console.log(respuesta)
        swal(respuesta)
    }
}

export const logIn = (email, password) => async (dispatch) =>{
    try {
        let res = await axios.post(`http://${url}/user/login`, email, password)
        dispatch(getUser(res.data))
        return res.data
    } catch (e) {
        let respuesta = JSON.parse(e.request.response).message;
        console.log(respuesta)
        swal(respuesta)
    }

}
export const logOut = ()  => async (dispatch) =>{
    try {
            let user =  JSON.parse(sessionStorage.getItem('userdata')) 
            let res = await axios.post(`http://${url}/user/logout`,user)
            // sessionStorage.setItem('user', JSON.stringify(res.data.loggedUser))
            // sessionStorage.removeItem('user')
            dispatch(getUser(res.data.loggedUser))
            return res.data.loggedUser
    } catch (error) {
        console.log(error)
    }

}

export const postRecovery =(payload)=> async (dispatch) => {
    try{
        let res = await axios.post(`http://${url}/user/forgot-password`, payload)
        console.log(res, 'res')
        swal({title:"Success, Please check your email to recover your password",icon: "success",}).then(function() {
            window.location.href = "/";
        })
    }catch(e){
        let respuesta= JSON.parse(e.request.response).message;
        console.log(respuesta)
        swal(respuesta)
    }
}

export const changePassword =(password,token)=> async (dispatch) => {
    try{
        
        let res = await axios.post(`http://${url}/user/new-password/${token}`, password)
        console.log(res, 'res')
        
        swal({title:"Your password was changed successfully",icon: "success",}).then(function() {
            window.location.href = "/login";
        })
    }catch(e){
        let respuesta= JSON.parse(e.request.response).message;
        console.log(e)
        swal("Your session expired, or token is invalid..")
    }
}

export const confirmAcc =(token)=> async (dispatch) => {
    try{
        
        let res = await axios.get(`http://${url}/user/confirm/${token}`)
        console.log(res, 'res')
        
        swal({title:"Your account has been confirmed, thank you!",icon: "success",}).then(function() {
            window.location.href = "/login";
        })
    }catch(e){
        let respuesta= JSON.parse(e.request.response).message;
        console.log(e)
        swal("The session has expired, or your token is invalid")
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
