import React from "react";
import './style.css';
import client1 from'./logo/client-1.png';
import client2 from'./logo/client-2.png';
import client3 from'./logo/client-3.png';
import client4 from'./logo/client-4.png';
import client5 from'./logo/client-5.png';
import client6 from'./logo/client-6.png';
function Partenaire() {
    return(
<div className="DivPartenaire">
                <img src={client1}  alt="logo" />
                <img src={client2}  alt="logo" />
                <img src={client3}  alt="logo" />
                <img src={client4}  alt="logo" />
                <img src={client5}  alt="logo" />
                <img src={client6}  alt="logo" />
            </div>
    )}
    export default Partenaire;