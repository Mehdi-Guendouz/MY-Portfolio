import React from 'react';
import "./about.scss"
import { Link } from 'react-router-dom';

const About = () => {

    return (
        <div className='about-container'>
            <div className="top" data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine">
                <div>
                    <h3><span>#</span>About-me</h3>
                    <div className='line'></div>
                </div>
            </div>
            <div className="bottom">
                <div className="left" data-aos="fade-right">
                    <p>Hello I am Mehdi</p>
                    <p>A computer science student and a full-stack web developer based in Algeria. 
                        I have a passion for creating beautiful, user-friendly websites that make a lasting impression. I have experience building web applications using a wide range of modern technologies and I am comfortable working with both front-end and back-end technologies
                    </p>
                    <p>I understand that every project is unique, and I believe that a successful website not only needs to be functional and reliable but also aesthetically pleasing and easy to navigate. </p>
                    <Link to="/about">{"Read more ->"}</Link>
                </div>
                <div className="right" data-aos="fade-left">
                    <img src="./images/portfolioTest.JPG" alt="" />
                </div>
            </div>
        </div>
    );
}

export default About;
