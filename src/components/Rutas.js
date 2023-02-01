import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Carrito from "./Carrito";
import NavBar from "./NavBar";
import React from "react";
import Footer from "./Footer";
import "../App.css";



const Rutas = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AcercaDe" element={<About />} />
                <Route path="/Barcos" element={<Carrito />} />

            </Routes>
            <Footer/>
        </Router>
    );
}

export default Rutas;
