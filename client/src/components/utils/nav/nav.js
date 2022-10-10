import React from "react";
import "./nav.css"
import img from "./logo"
import useUser from "../../../hooks/useUser";
import {useRoute} from 'wouter'


export const NavBar = () => {

	const {isLogged,logout} = useUser()

	const [match] = useRoute("/login");
	

	const handleClick = e => {
		e.preventDefault()
		logout()
	  }

	  const renderButton =({isLogged}) =>{
		return isLogged ? 
		<a id ="Logout" href="/" 
		class="btn btn-primary ms-2 ms-lg-3" onClick={handleClick} >Log Out</a>:<>
		<a id ="Login"href="/login" class="btn btn-outline-primary">Log In</a>
		<a id ="SignUp"href="/register" class="btn btn-primary ms-2 ms-lg-3">Sign Up</a>
		</>}

		const content = match
		? null
		: renderButton({isLogged})
	  
    return (
        <div className="NavBar">
            <header class="navigation bg-tertiary">
	<nav class="navbar navbar-expand-xl navbar-light text-center py-3">
		<div class="container">
			<a class="navbar-brand"  href="/">
				<img loading="prelaod" decoding="async" class="img-fluid" width="160" src={img} alt="Wallet"/>
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mx-auto mb-2 mb-lg-0">
					<li class="nav-item"> <a class="nav-link" href="/">Home</a>
					</li>
					<li class="nav-item "> <a class="nav-link" href="/about">About</a>
					</li>
					<li class="nav-item "> <a class="nav-link" href="/createrecipe">Create Recipe</a>
					</li>
					<li class="nav-item "> <a class="nav-link" href="/contact">Contact</a>
					</li>
					<li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
							<li><a class="dropdown-item " href="/register">Register</a>
							</li>
							<li><a class="dropdown-item " href="/createrecipe">Create Recipe</a>
							</li>
							<li><a class="dropdown-item " href="/service">Service</a>
							</li>
							<li><a class="dropdown-item " href="/legal">Legal</a>
							</li>

						</ul>
					</li>
				</ul>
				{content}
			</div>
		</div>
	</nav>
</header>
            
        </div>
    )
}