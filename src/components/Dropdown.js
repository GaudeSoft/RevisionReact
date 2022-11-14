import React from "react";
import './style.css';
import {AiOutlineDown} from 'react-icons/ai';
import imgDropdown from './imgDropdown.png';


function Dropdown() {
    return(
        <div className="DivDropdown">
                <div className="DivPartieTexte">
                    <div className="GrandTitre">
                        <h1>Eum ipsam laborum deleniti <span className="GrandTitreFort">velit pariatur architecto aut nihil</span></h1>
                    </div>
                    <div className="SousTitre">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quidem. Nam lab  consectetur animi, eligendi nobis 
                    </div>
                    <div className="ContenuDropdown">
                        <div className="NumeroDropdown">
                            <h1>01</h1>
                        </div>
                        <div className="TitreDropdown">
                            <h1>Non consectetur a erat nam at lectus urna duis?</h1>
                        </div>
                        <div className="DropdownIcone">
                            <AiOutlineDown/>
                        </div>
                    </div>
                    <div className="ContenuDropdown">
                        <div className="NumeroDropdown">
                            <h1>02</h1>
                        </div>
                        <div className="TitreDropdown">
                            <h1>Feugiat scelerisque varius morbi enim nunc?</h1>
                        </div>
                        <div className="DropdownIcone">
                            <AiOutlineDown/>
                        </div>
                    </div>
                    <div className="ContenuDropdown">
                        <div className="NumeroDropdown">
                            <h1>03</h1>
                        </div>
                        <div className="TitreDropdown">
                            <h1>Dolor sit amet consectetur adipiscing elit?</h1>
                        </div>
                        <div className="DropdownIcone">
                            <AiOutlineDown/>
                        </div>
                    </div>
                </div>
                <div className="DivPartieImage">
                <img src={imgDropdown}  alt="logo" />
                </div>
        </div>
        )
    }
export default Dropdown;