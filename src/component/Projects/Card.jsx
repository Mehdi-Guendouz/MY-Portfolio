import React from 'react';
import { Link } from 'react-router-dom';
import { GoMarkGithub } from 'react-icons/go';
import { MdLiveTv } from 'react-icons/md';

const Card = () => {
    
    return (
        <div className='card-item' data-aos="fade-right">
            <div className="image">
                <img src="./images/portfolioTest.JPG" alt="" />
            </div>
            <p className='lang'>js python css html</p>
            <div className="desc">
                <h3>ChertNodes</h3>
                <p>Minecraft servers hosting </p>
                <div className="btn-container">
                    <Link className='live'><MdLiveTv />Live</Link>
                    <Link className='cached'><GoMarkGithub />GitHub</Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
