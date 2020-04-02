import React, { Component } from 'react'
import logo from '../assets/image/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import Navbar from './navbar'
class Dashboard extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <header className="App-header">
                    <img src={logo} alt="logo" width="500px" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p>
                            <Link to='/product' className="App-Link">Go to Product</Link>
                        </p>
                    </a>
                </header>
            </div>
        )
    }
}
export default Dashboard;