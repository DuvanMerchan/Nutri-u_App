import React, { useState, useEffect } from "react";

import {useDispatch, useSelector} from "react-redux";
import { NavBar } from "../utils/nav/nav";

import { logIn } from "../../redux/actions/useractions";


export const Login = () => {

    const dispatch = useDispatch()
    
    const [userLogged, setUserLogged] = useState({
        email:'',
        password:'',
    })
    let user = useSelector((state) => state.user)
    
    useEffect(()=>{
        console.log('USER 1', user)
    },[dispatch])
    
    function handleSubmit(e){
        e.preventDefault()
        dispatch(logIn(userLogged))
        alert()
    }
    
    function handleInputChange(e){
        e.preventDefault()
        setUserLogged({
            ...userLogged,
            [e.target.name]: e.target.value
        })

    }

    
    return (
        <div className="register-user">
            <NavBar/>
            <h1>Log in to Nutri-u and get a better experience</h1>
        <div className="register-Content">
            
            
        <div className="registerBody">
            <form onSubmit={e => handleSubmit(e)}>
                <input onChange={e => handleInputChange(e)} name='email'type='email' placeholder='Enter your email'/>
                <input onChange={e => handleInputChange(e)} name='password'type='password' placeholder='Enter your password'/>
                <button onSubmit={e => handleSubmit(e)}>LOG IN</button>
            </form>
        
        

        
        </div>

        
        </div>
        </div>
    )
}