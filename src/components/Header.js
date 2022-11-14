import React from "react";
import './style.css';
import imgHeader from'./imgHeader.png';
// import {NavLink} from'react-router-dom';
import {AiOutlinePlayCircle} from 'react-icons/ai'
function Header() {
    return(
<div className="DivHeader">
                <div className="DivMenu">
                    <div className="DivNom">
                        <h2>ARSHA</h2>
                    </div>
                    {/* <div className="DivOngletMenu">
                        <NavLink className="ElementMenu" to=''>nnnn</NavLink>
                        <NavLink className="ElementMenu" to=''>nnnn</NavLink>
                        <NavLink className="ElementMenu" to=''>nnnn</NavLink>
                        <NavLink className="ElementMenu" to=''>nnnn</NavLink>
                        <NavLink className="ElementMenu" to=''>nnnn</NavLink>
                        <NavLink className="ElementMenu" to=''>nnnn</NavLink>
                        <NavLink className="ElementMenu" to=''>nnnn</NavLink>
                        <NavLink className="ElementMenu" to=''>nnnn</NavLink>
                    </div> */}
                </div>
               <div className="DivCorpsHeader">
                    <div className="DivTexte">
                        <div className="DivTitre">
                            <h1>Better Solutions For Your Business</h1>
                        </div>
                        <div className="DivSousTitre">
                            <h3>We are team of talented designers making websites with Bootstrap</h3>
                        </div>
                        <div className="DivBouton">
                            <div className="Bouton">
                            <button id="BtnStart">Get Started</button>
                            </div>
                            
                            <div className="IconeButton">
                                <AiOutlinePlayCircle className="Icone"/>
                                <button id="BtnWatch"> Watch video</button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="DivImage">
                        <img src={imgHeader}  alt="logo" />
                    </div>
                </div>
            </div>
    )}
    export default Header;