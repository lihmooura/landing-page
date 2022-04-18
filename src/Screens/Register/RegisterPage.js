import React, { useState } from 'react';
import '../Register/CSS/RegisterPage.css';
import '../Register/CSS/RegisterPageResponsive.css'
import TextField from '../../Components/Inputs/Input';
import Button from '../../Components/Button/Button';
import axios from 'axios';
import Divider from '../../Assets/Imagens/Divider1.png';

const InfoPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(false)


    let onNameChange = (event) => { 
        setName(event.target.value)
    }
    let onEmailChange = (event) => { 
        setEmail(event.target.value)
    }

    // ANCHOR: This URL NEEDS EITHER A TOKEN OR PERMISSION ON CORS.
    let handleSubmit = () => { 
        if (email && name) { 
            setLoading(true)
            console.log(email, name)
            axios.post('https://api.jungledevs.com/api/v1/challenge-newsletter/', {
                email: email,
                name: name
              }).then((res) => { 
                  console.log("res", res)
              })
              .catch((err) => { 
                  console.log("error, :", err)
                  alert(err)
                  setLoading(false)
                  setStatus(true)
              })
        }
        
    }

    return (
       <div className='Info-Page'>
           <div className='Info-text'>
           <h3 className='medium-text'>Are you a parent without a nanny and looking to share?</h3>
           <p>Leave us your name and email 
               and we’ll update you as soon as a share becomes available in your area!</p>
            </div>

            <div className='input-form'>
                <TextField status={status} placeholder="Your name" className="input-name"  onchange = {
                    onNameChange
                 } />
                <TextField status={status} placeholder="Your email" className="input-email"  onchange = { 
                    onEmailChange
                } />
             
             <Button loading={loading}  label={ "Send"} onclick= { 
                 handleSubmit
             } />

            </div>
            <div className='Divider'>
            <img  src={Divider} alt="divider" />
            </div>
       </div>
       
    )
}

export default InfoPage;