import React, { useState } from "react";

import {useDispatch, useSelector} from "react-redux";
import { NavBar } from "../utils/nav/nav";

import { logIn } from "../../redux/actions/useractions";


export const Login = () => {

    const dispacth = useDispatch()
    //const {userRegisted} = useSelector((state) => state.userRegisted)
    const [email , setEmail] = useState ('')
    const [password , setPassword] = useState ('')

    function handleSubmit(e){
        e.preventDefault()
        dispacth(logIn({
            email,
            password
        }))
        alert()
    }

    function handleEmailChange(e){
        e.preventDefault()
        setEmail({
            ...email,
            email: e.target.value
        })
    }

    function handlePasswordChange(e){
        e.preventDefault()
        setPassword(e.target.value)
    }
    
    return (
        <div className="register-user">
            <NavBar/>
            <h1>Log in to Nutri-u and get a better experience</h1>
        <div className="register-Content">
            
            
        <div className="registerBody">
            <form onSubmit={e => handleSubmit(e)}>
                <input onChange={e => handleEmailChange(e)} type='email' placeholder='Enter your email'/>
                <input onChange={e => handlePasswordChange(e)} type='password' placeholder='Enter your password'/>
                <button onSubmit={e => handleSubmit(e)}>LOG IN</button>
            </form>
        
        

        
        </div>

        
        </div>
        </div>
    )
}