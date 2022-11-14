import React from "react";
import './style.css';
import {BsCheck2All} from 'react-icons/bs';

function About() {
    return(
        <div className="DivAbout">
            <div className="BlocDivTitre">
                <div className="DivTitre">
                    <h1>ABOUT US</h1>
                </div>
                <div className="DividerTitre"> </div>
            </div>
            <div className="PremierSousAbout">
                <div className="TextePartie1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit modi cum eius! Aut impedit 
                    <div className="Liste">
                        <BsCheck2All className="IconeListe"/>
                        <span>Lorem ipsum dolor consectetur adipisicing elit</span>
                    </div>
                    <div className="Liste">
                        <BsCheck2All className="IconeListe"/>
                        <span>Lorem ipsum dolor consectetur adipisicing elit</span>
                    </div>
                    <div className="Liste">
                        <BsCheck2All className="IconeListe"/>
                        <span>Lorem ipsum dolor consectetur adipisicing elit</span>
                    </div>
                </div>
                <div className="TextePartie2">      
                    <div className="LeTexte">   
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quidem. Nam laborum esse ipsam nostrum error alias eum consectetur animi, eligendi nobis accusantium molestiae beatae doloribus vel ad. Aspernatur, a. 
                        quisquam sapiente porro rem odit id possimus
                    </div>
                    <div className="LeBoutton">
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
export default About;