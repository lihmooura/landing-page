import React from 'react';
import Section3 from '../../Assets/Imagens/ImageSection3.png';
import './CSS/SharedPayments.css';
import './CSS/SharedPaymentsResponsive.css';

const SharedPage = () => {
    return (
        <div className='Shared-screen'>

            <div className='Shared-image'>
                <img className="shared-image" src={Section3} alt="section"/>
            </div>

            <div className="Shared-text">
            <h2 className='large-text'>Shared payments made simple</h2>
            <p className='x-small-text'>Sometimes it’s hard enough just sharing a restaurant bill. 
                Try sharing that bill week in, week out and you might encounter more than 
                a few snares. But not with Hapu. Simply set your rates and our automated 
                payment system takes care of the rest. You need never talk money 
                or who owes what.</p>
            <p className='link x-small-text'>Read how Bridget’s share (without Hapu) ended over $15</p>
            </div>
        </div>
    )
}

export default SharedPage;