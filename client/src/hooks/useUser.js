import { useCallback, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import Context from "../Context/UserContext";
import { logIn, logOut } from "../redux/actions/useractions";


export default function useUser (){
    
    const dispatch = useDispatch()

   const {token,
    setToken,
    loggedUser,
    setLoggedUser,
    dataUser,
    setDataUser} = useContext(Context)
    const [state, setState] = useState({ loading: false, error: false })

    const login = useCallback(({email, password}) =>{
        setState({loading: true, error: false })
        dispatch(logIn({email, password}))
        .then(user=>{
            sessionStorage.setItem('userdata', JSON.stringify(user.user))
            sessionStorage.setItem('user', JSON.stringify(user.user.user))
            sessionStorage.setItem('token', JSON.stringify(user.user.token))
            setState({loading: false, error: false })
            setDataUser(user.user)
            setLoggedUser(user.user.user)
            setToken(user.user.token)
        })
        .catch(err =>{
            sessionStorage.removeItem('userdata')
            sessionStorage.removeItem('user')
            sessionStorage.removeItem('token')
            setState({loading: false, error: true })
            console.error(err)
        })
    },[setDataUser,setLoggedUser,setToken] )

    const logout = useCallback(()=>{
        dispatch(logOut())
        .then(user=>{
            sessionStorage.setItem('userdata', JSON.stringify(user))
            sessionStorage.setItem('user', JSON.stringify(user.user))
            sessionStorage.setItem('token', JSON.stringify(user.token))
            sessionStorage.removeItem('userdata')
            sessionStorage.removeItem('user')
            sessionStorage.removeItem('token')
            setDataUser(null)
            setLoggedUser(null)
            setToken(null)
        }).catch(err =>{
            sessionStorage.removeItem('userdata')
            sessionStorage.removeItem('user')
            sessionStorage.removeItem('token')
            console.error(err)
        })
    },[setDataUser,setLoggedUser,setToken] )
  return {
    isLogged: Boolean(token),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
  }
}