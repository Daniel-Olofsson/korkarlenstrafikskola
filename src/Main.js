import React, { useEffect, useState  } from "react";
import {
    Route,
    NavLink,
    HashRouter,
    Routes

} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Price from "./Price";
import Footer from "./components/footer/footer.js";
import "./components/navbar/navbar.css"
import Logo from "./components/images/logo.png"
import StrLogo from "./components/images/strmedlem.jpg"
import netlifyIdentity from './components/widgets/identity/netlifyAuth'; // Adjust the path



const Main = () => {
    const [user, setUser] = useState(null);


    useEffect(() => {
        // Listen for login events
        netlifyIdentity.on('login', (user) => {
          setUser(user);
          netlifyIdentity.close(); // Close the modal after login
        });
    
        // Listen for logout events
        netlifyIdentity.on('logout', () => {
          setUser(null);
        });
    
        // Check if the user is already logged in
        const currentUser = netlifyIdentity.currentUser();
        if (currentUser) {
          setUser(currentUser);
        }
      }, []);
      const login = () => {
        // Open the Netlify Identity modal for login
        netlifyIdentity.open();
      };
    
      const logout = () => {
        // Log the user out
        netlifyIdentity.logout();
      };
        
        return (
        <HashRouter>
            <div>
                    <div className="nav-wid">
                    <nav className="navbar navbar-expand-lg navbar-light">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="/">
                                <img src={Logo} className="logo-image img-fluid" class="d-inline-block align-text-top" alt="logo" width="150" height="80"/>
                                <img src={StrLogo} className="image" class="d-inline-block align-text-top" width="60" height="40" alt="str-logo"/>
                                </a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><a>MENY </a>
                                <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/home"><NavLink to="/">Hem</NavLink></a>
                                    </li>
                                    <li class="nav-item">
                                    <a className="nav-link" href="/price"><NavLink to="/price">Priser</NavLink></a>
                                    </li>
                                    <li class="nav-item">
                                    <a className="nav-link" href="/about"><NavLink to="/about">Om oss</NavLink></a>
                                    </li>
                                    <li className="nav-item">
                                    {user ? (
                                    <button className="nav-link" onClick={logout}>Logout</button>
                                    ) : (
                                    <button className="nav-link" onClick={login}>Login</button>
                                    )}
                                </li>
                                </ul>
                                </div>
                            </div>
                        </nav>

                    </div>
                    
            

                
                
                <div className="content bg-light">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/price" element={<Price/>}/>
                    <Route path="/about" element={<About/>}/>   
                </Routes>
                </div>
            </div>
            <Footer/>
        </HashRouter>
        );}
    
export default Main;