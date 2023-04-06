import React from 'react';
import "./AboutPage.scss";
import Navbar from '../../component/Navbar/Navbar';
import About from '../../component/about/About';
import Footer from '../../component/footer/Footer';

const AboutPage = ({path}) => {
    return (
        <div className='about-page-container'>
        <div className="wrapper">
            <Navbar path={path}/>
            <About />
            <div className="skills-table">
                <h3><span>#</span>All-Media</h3>
                <div className="items">
                    <div className="item">
                        <h4>Languages</h4>
                        <p>Js Typescript Python C C++ C#</p>
                    </div>
                    <div className="item">
                        <h4>Languages</h4>
                        <p>Js Typescript Python C C++ C#</p>
                    </div>
                    <div className="item">
                        <h4>Languages</h4>
                        <p>Js Typescript Python C C++ C#</p>
                    </div>
                    <div className="item">
                        <h4>Languages</h4>
                        <p>Js Typescript Python C C++ C#</p>
                    </div>
                    <div className="item">
                        <h4>Languages</h4>
                        <p>Js Typescript Python C C++ C#</p>
                    </div>
                </div>
                
            </div>
        </div>
        <Footer />
    </div>
    );
}

export default AboutPage;
