import React from 'react';
import "./contact.scss"
import { MdEmail } from 'react-icons/md';
import { SiDiscord } from 'react-icons/si';
import { CopyButton, Tooltip } from '@mantine/core';
import Form from '../Form/Form';

const Contact = ({title = true}) => {
    return (
        <div className='contact-container'>
            {title && <div className="top" data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine">
                <div>
                    <h3><span>#</span>Contact</h3>
                    <div className='line'></div>
                </div>
            </div>}
            <div className="bottom" data-aos="fade-right">
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
                        <a href="mailto:m_guendouz@estin.dz" target='_blank' rel="noreferrer"><MdEmail className='icon'/><span>/m_guendouz@estin.dz</span></a>
                    </div>
                </div>
            </div>
            <Form />
        </div>
    );
}

export default Contact;
