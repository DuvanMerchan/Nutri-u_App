import React from "react";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { NavBar } from "../../nav/nav";
import {Formik} from "formik"
import { changePassword } from "../../../../redux/actions/useractions";



export const Change = () => {

    const dispacth = useDispatch()
    //const {userRegisted} = useSelector((state) => state.userRegisted)
    let token = useParams("token")
    
    
    return (
        <div className="register-user">
            <NavBar/>
            <h1>Change your password Nutri-u</h1>
        <div className="register-Content">
            
            
        <div className="registerBody">
            
        
        

        <Formik
            initialValues={{
                password:"",
                password2:"",
            }}

            validate={(valores)=>{
                let errores = {}

                

                //validacion passoword

                if(!valores.password){
                    errores.password = "Please, enter an password"
                }

                if(valores.password != valores.password2){
                    errores.password2 = "the passwords are different"
                }
            return errores   
            }}

            
            onSubmit={(valores,{resetForm})=>{
                console.log(valores,"valores")
                dispacth(changePassword(valores,token.token))
            }}
        >
            {( {values,errors,touched,handleSubmit,handleChange,handleBlur} )=>(
                <form className="Form-Register" onSubmit={handleSubmit}>


                <div class="row mb-3">
                    <label  for="inputPassword3" class="col-sm-2 col-form-label">New Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                        {touched.password && errors.password && <div className="errors">{errors.password}</div>}
                    </div>
                </div>

                <div class="row mb-3">
                    <label  for="inputPassword3" class="col-sm-2 col-form-label">Repeat Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3" name="password2" value={values.password2} onChange={handleChange} onBlur={handleBlur}/>
                        {touched.password2 && errors.password2 && <div className="errors">{errors.password2}</div>}
                    </div>
                </div>

                
                <div className="buttons-register">
                <button type="submit" class="btn btn-primary">Send</button>

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