import React from 'react';
import '../../Assets/Global.css';
import '../Home/CSS/Home.css';
import '../Home/CSS/Homeresponsive.css';
import PlayButton from '../../Assets/Imagens/Play button.png';
import BgHome from '../../Assets/Imagens/bg-home.png'
import ImageHeader from '../../Assets/Imagens/ImageHeader.png'
import avatar from '../../Assets/Imagens/ProfileImage.png'


const HomePage = () => {
    return (
        <div>
        <div className='Home'>
            <img className='bg' src={BgHome} alt="bg" />

            <div className='Home-text'>
               <div className='description-home'>
                <h1 className='x-large-text white'>Easily create or join a local  <br/>
                    nanny share with Hapu</h1>

                    <h3 className="medium-text light white">
                        Hapu is Airbnb for nanny share. Share your home, 
                        nanny and costs and create new flexible, 
                        affordable solutions in childcare.</h3>
                        </div>
                   <div className='button-play'>
                   <img className='image-play' src={PlayButton} alt="play"/>
                    <h4 className='white light'>See hapu in action (27 seconds)</h4>  
                    </div>

            </div>

            <div className='Home-image'>
            <img src={ImageHeader} alt="header" className="ImageHeader" />
            </div>
            
            </div>
            
            <div className='home-footer'>
            <img src={avatar} alt="avatar" />
            <p className='x-small-text link text-footer-one'>
                Sarah’s day care available now in North Sydney</p>
            <p className='x-small-text'>Wednesday, Thursday, Friday - 7:30 - 5:30</p>

            </div>
        </div>
    )
}

export default HomePage;