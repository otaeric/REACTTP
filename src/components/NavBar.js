import { Link, NavLink } from "react-router-dom"
import React from "react";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink className="nav-link" to="/">Inicio</NavLink></li>
                <li><NavLink className="nav-link" to="/Barcos">Barcos</NavLink></li>
                <li><NavLink className="nav-link"to="/AcercaDe">Acerca de Stan...</NavLink></li>
                
            </ul>

            {/* <ul>
                <li><NavLink to="/" activeclassName="active">Inicio</NavLink></li>
                <li><NavLink to="/AcercaDe" activeclassName="active">Acerca de...</NavLink></li>
                <li><NavLink to="/Contacto" activeclassName="active">Contacto</NavLink></li>
            </ul> */}
        </nav>
     );
}
 
export default NavBar;