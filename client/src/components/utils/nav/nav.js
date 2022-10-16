import React from "react";
import "./nav.css";
import img from "./logo";
import useUser from "../../../hooks/useUser";
import { useRoute } from "wouter";
import LoggedUser from "./LoggedUser";
import { NavAbout } from "./NavAbout";
import { useNavigate } from "react-router-dom"

export const NavBar = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const navigate2 = useNavigate() 

  const {isLogged,logout} = useUser()
  const [match] = useRoute("/login");
  const handleClick = e => {
	e.preventDefault()
	logout()

	navigate2("/home")
  }
  const renderButtonLogin =({isLogged}) =>{
	return isLogged ? 
	<a id ="Logout" href="/home" 
	class="btn btn-primary ms-2 ms-lg-3" onClick={handleClick} >Log Out</a>:<>
	<a id ="Login"href="/login" class="btn btn-outline-primary">Log In</a>
	<a id ="SignUp"href="/register" class="btn btn-primary ms-2 ms-lg-3">Sign Up</a>
	</>}

	const content = match
	? null
	: renderButtonLogin({isLogged})

	const renderPages = ({isLogged}) =>{
		return isLogged?
		<>
		{ LoggedUser(user)}
		</>:<>
		<li class="nav-item"> <a class="nav-link" href="/home">Home</a></li>
		</>
	}
  return (<div>
	<div className="NavBar">
	<header class="navigation bg-tertiary">
	  <nav class="navbar navbar-expand-xl navbar-light text-center py-3">
		<div class="container">
		  <a class="navbar-brand" href="/">
			<img
			  loading="prelaod"
			  decoding="async"
			  class="img-fluid"
			  width="160"
			  src={img}
			  alt="Wallet"
			/>
		  </a>
		  <button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		  >
			{" "}
			<span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mx-auto mb-2 mb-lg-0">
				{renderPages({isLogged})}
				{NavAbout()}				
			</ul>
			{content}
		  </div>
		</div>
	  </nav>
	</header>
  </div>
  </div>
  );
};
