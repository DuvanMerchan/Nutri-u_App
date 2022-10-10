import React from "react";
import "./recovery.css"
import {useDispatch, useSelector} from "react-redux";
import { NavBar } from "../../nav/nav";
import {Formik} from "formik"
import { postRecovery } from "../../../../redux/actions/useractions";


export const Recovery = () => {

    const dispacth = useDispatch()
    //const {userRegisted} = useSelector((state) => state.userRegisted)
    
    return (
        <div className="register-user">
            <NavBar/>
            <h1>Insert email to recovery Password in Nutri-u</h1>
        <div className="register-recovery">
            
            
        <div className="registerBody">
            
        
        

        <Formik
            initialValues={{
                email: "",
            }}

            validate={(valores)=>{
                let errores = {}

                // Validacion correo
					if(!valores.email){
						errores.email = 'Please enter an email'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
						errores.email = 'Please, insert valid email.'
					}

            return errores   
            }}


            onSubmit={(valores,{resetForm})=>{
                dispacth(postRecovery(valores))
            }}
        >
            {( {values,errors,touched,handleSubmit,handleChange,handleBlur} )=>(
                <form className="Form-Recovery" onSubmit={handleSubmit}>

                <div class="row mb-2">
                    
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Insert your email"/>
                        {touched.email && errors.email && <div className="errors">{errors.email}</div>}
                    </div>
                </div>

                <div className="button-recovery">
                <button id="buttonRecovery" type="submit" class="btn btn-primary">Send email</button>
                
                </div>
            </form>
            )}
            </Formik>
        </div>
        {/* {userRegisted?<h1>{userRegisted}</h1>:null} */}
        
        </div>
        </div>
    )
}