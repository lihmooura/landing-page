import React from 'react';
import './CSS/BecomeNanny.css';
import Union from '../../Assets/Imagens/Union.png';
import Hapu from '../../Assets/Imagens/Logo.svg';
import ButtonSocial from '../../Components/ButtonSocial/ButtonSocial';
import './CSS/BecomeNannyResponsive.css';


const BecomeNanny = () => {
    return (
        <div className='wrapper-screen'>
            <div className='screen-text'>
                <h2 className='large-text'>Become a nanny share host</h2>
                <p className='x-small-text'>Takes less than 5 minutes to get started</p>
                <button className='screen-button'>
                    <img className="image" src={Union} alt="union" />
                    <div>
                    <p className='btn-text1'>Create Your Nanny Share</p>
                    <p className='btn-text2'>Takes less than 5 minutes</p>
                    </div>
                    </button> 
                    
                <p className='link x-small-text'>Or browse local nanny-shares</p>
            </div>

            <div className='screen-footer'>

                <div className='screen-img'>
                    <img src={Hapu} alt="hapu" />
                </div>

            <div className='screen-info'>
          
            <p className='x-small-text'>Share Your Nanny</p>
            <p className='x-small-text'>Our Story</p>
            <p className='x-small-text'> Blog</p>
            <p className='x-small-text'>Terms & Policy</p>
         
            </div>

            <div className='ButtonSocial'>
                <ButtonSocial icon={"facebook"} />
                <ButtonSocial icon={"twitter"} /> 
                <ButtonSocial icon /> 
            </div>
            
            </div>
            <div className='footer-text'>
                <p className='x-small-text'>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
            </div>
        </div>
    )
}

export default BecomeNanny;