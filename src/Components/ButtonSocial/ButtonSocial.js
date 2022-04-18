import './buttonsocial.css';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Button = ({icon}) => { 

    return ( 
        <div>
            <button className='button'>
                
                {
                icon === "facebook" ? ( 
                        <FiFacebook />
                    ) : icon === "twitter" ? ( 
                        <FiTwitter />
                    ) : ( 
                        <FiInstagram />
                    )
                }
                    
                
                
                

                </button>
            </div>
    )
}
export default Button