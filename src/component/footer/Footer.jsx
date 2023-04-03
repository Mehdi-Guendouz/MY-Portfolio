import React from 'react';
import "./Footer.scss"
import { GoMarkGithub } from 'react-icons/go';
import { SiLinkedin } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className="top">
                <div className="content">
                    <div>
                        Mehdi
                        <span>m_guendouz@estin.dz</span>
                    </div>
                    <p>Full Stack Web developer</p>
                </div>
                <div className="media">
                    <h3>Media</h3>
                    <div className="icons">
                        <a href='https://github.com/MehidGN' target='_blank' rel="noreferrer"><GoMarkGithub className='icon'/></a>
                        <a href='https://www.linkedin.com/in/mehdi-guendouz-06b59b225/' target='_blank' rel="noreferrer"><SiLinkedin className='icon'/></a>
                        <a href="mailto:m_guendouz@estin.dz" target='_blank' rel="noreferrer"><MdEmail className='icon'/></a>
                    </div>
                </div>
            </div>
            <p className='copyright'>© Copyright 2023. Made by Elias Developed by Mehdi</p>
        </footer>
    );
}

export default Footer;
