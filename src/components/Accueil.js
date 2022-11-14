import React from "react";
import './style.css';
import Header from "./Header";
import Partenaire from "./Partenaire";
import About from "./About";
import Dropdown from "./Dropdown";

// import {NavLink} from'react-router-dom';
function Accueil() {
    return(
        <div className="DivPrincipal">
            <Header/>
            <Partenaire/>
            <About/>
            <Dropdown/>
        </div>
    )
}
export default Accueil;