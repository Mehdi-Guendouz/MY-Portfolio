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
                <h3><span>#</span>Skills</h3>
                <div className="items">
                    <div className="item" data-aos="fade-right" data-aos-delay="100">
                        <h4>Languages</h4>
                        <p><span className='important'>#<span>JavaScript</span></span> <span className='important'>#<span>HTML5</span></span> <span className='important'>#<span>TypeScript</span></span> <span className='important'>#<span>CSS3</span></span> SQL Java Pascal Python C C++ C#</p>
                    </div>
                    <div className="item" data-aos="fade-right" data-aos-delay="200">
                    <h4>Front-End Frameworks & Libraries</h4>
                        <p><span className='important'>#<span>React-Js</span></span> <span className='important'>#<span>Next-Js</span></span> <span className='important'>#<span>Sass-CSS</span></span> <span className='important'>#<span>Tailwind-Css</span></span></p>
                    </div>
                    <div className="item" data-aos="fade-right" data-aos-delay="300">
                    <h4>Back-End Frameworks & Libraries</h4>
                        <p><span className='important'>#<span>Express-Js</span></span> <span className='important'>#<span>Node-Js</span></span> <span className='important'>#<span>Mongodb</span></span></p>
                    </div>
                    <div className="item" data-aos="fade-right" data-aos-delay="400">
                    <h4>DataBases</h4>
                        <p><span className='important'>#<span>MongoDb</span></span> MySQL</p>
                    </div>
                    <div className="item" data-aos="fade-right" data-aos-delay="500">
                    <h4>Tools</h4>
                        <p><span className='important'>#<span>Git</span></span> <span className='important'>#<span>GitHub</span></span> <span className='important'>#<span>VS-code</span></span> <span className='important'>#<span>Figma</span></span> <span className='important'>#<span>Vercel</span></span> Netlify</p>
                    </div>
                </div>
                
            </div>
        </div>
        <Footer />
    </div>
    );
}

export default AboutPage;
