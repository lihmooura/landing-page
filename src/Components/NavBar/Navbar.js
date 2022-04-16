import React from 'react';
import './CSS/Navbar.css';
import './CSS/navbarresponsive.css';
import Badge from '../../Images/Badge.png'

const NavBar = () => {
    return (
        <div className="Navbar">
            
            <div className="NavOptions">
                <img src={Badge} alt="badge" />
                <h5>Create Your Nanny Share</h5>
                <h5>Brownse Shares</h5>
                <h5>Our Story</h5>
            </div>

            <div className="register">
                <button>Became a Nanny Share Host</button>    
                <h5>Sign In</h5>
            </div>

        </div>
    )
}

export default NavBar;