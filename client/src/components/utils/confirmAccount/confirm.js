import React from "react";
import "./confirm.css"
import {useDispatch, useSelector} from "react-redux";
import { NavBar } from "../nav/nav";
import { useParams } from "react-router-dom";
import { confirmAcc } from "../../../redux/actions/useractions";




export const ConfirmAccount = () => {

    const dispacth = useDispatch()
    const token = useParams("token")
    console.log(token.token,"token")

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispacth(confirmAcc(token.token))

    }

    return (
        <div className="confirm-success">
            <NavBar/>
            <div className="confirm-container">
            <h2>Welcome to Nutri-u, please confirm your account.</h2>
            </div>
            <div className="button-confirm">
                <button onClick={(e) => handleSubmit(e)} type="submit" class="btn btn-primary">Confirm Account</button>
            </div>
            
        </div>
    )
}