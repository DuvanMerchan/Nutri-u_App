import React from "react";
import "./register.css"
import { NavBar } from "../utils/nav/nav";


export const Register = () => {




    return (
        <div>
            <NavBar/>
        <div className="register-Content">
            
            <h1>Register</h1>
        <div className="registerBody">
        
            <form>
                <div class="row mb-2">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3" />
                    </div>
                </div>


                <div class="row mb-3">
                    <label for="inputText" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputText" />
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3" />
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Confirm Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3" />
                    </div>
                </div>

                
                
                <div class="row mb-3">
                    <div class="col-sm-10 offset-sm-2">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1" />
                            <label class="form-check-label" for="gridCheck1">
                            Accept terms and conditions
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
                <button type="submit" class="btn btn-secondary">Ya tengo cuenta</button>
            </form>
        </div>
        </div>
        </div>
    )
}