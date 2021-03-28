import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <div className="nav-logo">
                        <li><Link to="/">KI</Link></li>
                    </div>
                    <div className="nav-items">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Header