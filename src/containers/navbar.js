import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/image/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyNav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand"><img src={logo} width="150px" alt="branding"/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/product">Product</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/about">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink className = "btn btn-primary nav-link" to="/login"> Login</NavLink>
                    </li>
                    <li>""</li>
                    <li>
                        <NavLink className = "btn btn-primary nav-link" to="/register"> Register</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default MyNav;