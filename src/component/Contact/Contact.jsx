import React from 'react';
import "./contact.scss"
import { MdEmail } from 'react-icons/md';
import { SiDiscord } from 'react-icons/si';
import Form from '../Form/Form';

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className="top">
                <div>
                    <h3><span>#</span>Contact</h3>
                    <div className='line'></div>
                </div>
            </div>
            <div className="bottom">
                <p>I'm open to exploring freelance opportunities as well as any other ways I can assist you. Don't hesitate to reach out and let me know what you need.</p>
                <div className="message">
                    <span>message here</span>
                    <div className="item">
                        <SiDiscord className='icon'/> 
                        <span>Guendouz-Mehdi#5550</span>
                    </div>
                    <div className="item">
                        <MdEmail className='icon'/> 
                        <span>m_guendouz@estin.dz</span>
                    </div>
                </div>
            </div>
            <Form />
        </div>
    );
}

export default Contact;
