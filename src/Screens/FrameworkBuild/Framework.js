import React from 'react';
import Divider from '../../Assets/Imagens/Divider1.png';
import Section4 from '../../Assets/Imagens/ImageSection4.png';
import './CSS/Framework.css';
import './CSS/FrameworkResponsive.css';

const Framework = () => {
    return (
        <div className='Framework-wrapper'>
            
            <div className='Divider'>
            <img  src={Divider} alt="divider" />
            </div>

            <div className='Framework-text'>
                <h2 className='large-text'>A framework built for the long term</h2>
                <p className='text-framework x-small-text'>Childcare is for the long 
                    term.
                     And you need a framework you can count on that gives your share long <br/>
                     term viability and success. That’s why we’ve defined Hapu around our 
                     three tribal principles; clearly <br/>
                    defined process, transparency over 
                     money and equality of participation.</p>
                 <p className='link x-small-text'>Read how Hapu’s tribal background defines our app </p>    
            </div>

            <div className='Framework-image'>
                <img  className="framework-image" src={Section4} alt="section4" />
            </div>
        </div>
    )
}

export default Framework;