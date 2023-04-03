import React from 'react';
import "./about.scss"
import { Link } from 'react-router-dom';

const About = () => {

    return (
        <div className='about-container'>
            <div className="top">
                <div>
                    <h3><span>#</span>About-me</h3>
                    <div className='line'></div>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <p>Hello I am Mehdi</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequatur a ipsum non, perferendis perspiciatis distinctio dolores at tempora repudiandae ab alias reprehenderit, nisi vitae sit explicabo dicta molestiae magnam?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minus odio commodi quisquam fugit, rerum corrupti rem quas nobis fuga.</p>
                    <Link>{"Read more ->"}</Link>
                </div>
                <div className="right">
                    <img src="./images/portfolioTest.JPG" alt="" />
                </div>
            </div>
        </div>
    );
}

export default About;
