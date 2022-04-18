import React from 'react';
import ImageSection1 from '../../Assets/Imagens/ImageSection1.png';
import Divider from '../../Assets/Imagens/Divider1.png';
import '../Share /CSS/Share.css';
import '../Share /CSS/Shareresponsive.css'

const SharePage = () => {
    return (
        <div>
          <div className='Share-wrapper'>

              <div className='Share-text'>
                <p className='large-text'>Share your home,<br/>
                 nanny and costs</p>
                <p className='x-small-text'>You have a fantastic home, a fantastic nanny and wouldn’t
                cutting your costs in half be, well, fantastic?! If only it was 
                easy to connect with other parents to share your costs? 
                Well now it is, with Hapu. Hapu means tribe and it’s our 
                foundational 3 tribal principles that empowers you to
                create and manage your own tribe.A tribe that together 
                has the power to create new affordable solutions in
                childcare that work for you and your community.</p>
                 <p className='x-small-text link'>Ready to get started?</p>   
              </div>
              
              <div className='Share-image'>
                <img className='share-image'  src={ImageSection1} alt="section"/> 
              </div>
              </div>
              <div className='Divider-image'>
              <img  src={Divider} alt="divider" />
              </div>
          </div>
        

    )
}

export default SharePage;