import React from 'react';
import './CSS/Navbar.css';
import './CSS/navbarresponsive.css';
import Badge from '../../Assets/Imagens/Badge.png';
import '../../Assets/Global.css'

const NavBar = () => {
    return (
        <div className="Navbar">
            
            <div className="NavOptions white">
                <img src={Badge} alt="badge" />
                <h5 className='x-small-text'>Create Your Nanny Share</h5>
                <h5 className='x-small-text'>Brownse Shares</h5>
                <h5 className='x-small-text'>Our Story</h5>
            </div>

            <div className="register white">
                <button className='x-small-text white'>Became a Nanny Share Host</button>    
                <h5 className='x-small-text'>Sign In</h5>
            </div>

        </div>
    )
}

export default NavBar;