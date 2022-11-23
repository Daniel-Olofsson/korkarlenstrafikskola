import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter,
    Routes

} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Price from "./Price";
import "./components/navbar/navbar.css"
import Logo from "./components/images/logo.png"
class Main extends Component {
        render() {
        return (
        <HashRouter>
            <div>
                
                <ul className="navigation">
                <img src={Logo} className="image"/>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/price">Priser</NavLink></li>
                <li><NavLink to="/about">Om oss</NavLink></li>
                </ul>
                <div className="content">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/price" element={<Price/>}/>
                    <Route path="/about" element={<About/>}/>   
                </Routes>
                </div>
            </div>
        </HashRouter>
        );}
    }
export default Main;