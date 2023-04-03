import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
    const text = "Live <~>"
    const cached = "Cached >="
    return (
        <div className='card-item'>
            <div className="image">
                <img src="./images/portfolioTest.JPG" alt="" />
            </div>
            <p className='lang'>js python css html</p>
            <div className="desc">
                <h3>ChertNodes</h3>
                <p>Minecraft servers hosting </p>
                <div className="btn-container">
                    <Link className='live'>{text}</Link>
                    <Link className='cached'>{cached}</Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
