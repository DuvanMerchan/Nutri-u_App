import React, { useState, useEffect } from "react";
import "./log-in.css";
import { useLocation } from "wouter";
import { useNavigate } from "react-router-dom"

import { NavBar } from "../utils/nav/nav";

import useUser from "../../hooks/useUser";

export const Login = ({ onLogin }) => {
  const { isLoginLoading, hasLoginError, login, isLogged } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, navigate] = useLocation();
  const navigate2 = useNavigate()

  const [userLogged, setUserLogged] = useState({
    email: "",
    password: "",
  });
  //let user = useSelector((state) => state.user)

  useEffect(() => {
    if (isLogged) {
      navigate2("/me");
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
      {isLoginLoading && <strong className="checking">Checking credentials...</strong>}
      {!isLoginLoading && 
        <div className="register-Content">
          <div className="registerBody">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="Enter your email"
                value={email}
              />
              <div className="space10"></div>
              <input
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                placeholder="Enter your password"
                value={password}
              />
              <div className="space10"></div>
              <button
                id="buttonLogin"
                class="btn btn-primary"
                onSubmit={(e) => handleSubmit(e)}
              >
                LOG IN
              </button>
              <a className="forgot" href="/recovery-password">
                Forgot Password?
              </a>
            </form>
          </div>
        </div>
      }
      {hasLoginError && <strong className="invalid">Credentials are invalid</strong>}
    </div>
  );
};
