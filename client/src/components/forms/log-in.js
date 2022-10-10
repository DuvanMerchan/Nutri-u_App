import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";

import { NavBar } from "../utils/nav/nav";

import useUser from "../../hooks/useUser";

export const Login = ({onLogin}) => {
  const { isLoginLoading, hasLoginError, login, isLogged } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, navigate] = useLocation();




    
    const [userLogged, setUserLogged] = useState({
        email:'',
        password:'',
    })
    //let user = useSelector((state) => state.user)
    
   
    
    
  useEffect(() => {
    if (isLogged) {
      navigate("/");
      onLogin && onLogin();
    }
  }, [isLogged, navigate, onLogin]);

  function handleSubmit(e) {
    e.preventDefault();
    login({ email, password });
  }

  return (
    <div className="register-user">
      <NavBar />
      <h1>Log in to Nutri-u and get a better experience</h1>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading && 
        <div className="register-Content">
          <div className="registerBody">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="Enter your email"
                value={email}
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                placeholder="Enter your password"
                value={password}
              />
              <button onSubmit={(e) => handleSubmit(e)}>LOG IN</button>
            </form>
          </div>
        </div>
      }
      {hasLoginError && <strong>Credentials are invalid</strong>}
    </div>
  );
}

