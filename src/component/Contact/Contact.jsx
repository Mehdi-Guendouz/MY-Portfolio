import React from 'react';
import "./contact.scss"
import { MdEmail } from 'react-icons/md';
import { SiDiscord } from 'react-icons/si';
import { CopyButton, Tooltip } from '@mantine/core';
import Form from '../Form/Form';

const Contact = ({title = true}) => {
    return (
        <div className='contact-container'>
            {title && <div className="top">
                <div>
                    <h3><span>#</span>Contact</h3>
                    <div className='line'></div>
                </div>
            </div>}
            <div className="bottom">
                <p>I'm open to exploring freelance opportunities as well as any other ways I can assist you. Don't hesitate to reach out and let me know what you need.</p>
                <div className="message">
                    <span>Message here</span>
                    
                    <CopyButton value="Guendouz-Mehdi#5550" timeout={2000} >
                        {({ copied, copy }) => (
                            <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                                <div className="item" onClick={copy}>
                                    <SiDiscord className='icon'/> 
                                    <span>/Guendouz-Mehdi#5550</span>
                                </div>
                            </Tooltip>
                        )}
                        </CopyButton>
                    <div className="item">
                        <a href="mailto:m_guendouz@estin.dz" target='_blank' rel="noreferrer"><MdEmail className='icon'/></a>
                        <span>/m_guendouz@estin.dz</span>
                    </div>
                </div>
            </div>
            <Form />
        </div>
    );
}

export default Contact;
