import React from "react";
import { NavBar } from "../../components/utils/nav/nav";
import { Cards } from "../../components/recipes/cards/cards";
import { Footer } from "../../components/utils/footer/footer";

export const Home = ()=>{

    return(
        <div>
        <NavBar/>
        <Cards/>
        <Footer/>
        </div>
    )
}