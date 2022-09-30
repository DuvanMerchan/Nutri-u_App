import React from "react";
import { NavBar } from "../../components/utils/nav/nav";
import { Cards } from "../../components/recipes/cards/cards";

export const Home = ()=>{

    return(
        <div>
        <NavBar/>
        <Cards/>
        </div>
    )
}