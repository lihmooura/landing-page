import React from 'react';
import Section5 from '../../Assets/Imagens/ImageSection5.png';
import './CSS/NannyShare.css'


const NannyShare = () => {
    return (
        <div className='Wrapper-share'>

            <div className='Wrapper-image'>
                <img src={Section5} alt="section5"/>
            </div>

            <div className='Wrapper-text'>
            <h2>Coming soon: Nanny Share Daily Diary!</h2>
            <p>With the Hapu daily diary your nanny will be able to update you
                 and your sharers with photos and <br/>commentary of the day. You and 
                 sharers will receive notifications and you’ll be able to login 
                 to view the <br/>daily adventures fo your little ones. We can’t wait!</p>
            </div>

        </div>
    )
}

export default NannyShare;