import React from 'react';
import Projects from '../../component/Projects/Projects';
import "./AllProjects.scss"
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/footer/Footer';

const AllProjects = () => {
    return (
        <div className='Projects-container'>
            <div className="wrapper">
                <Navbar />
                <div className="up">
                    <h1><span>/</span>Projects</h1>
                    <p>Check my projects</p>
                </div>
                <Projects title={"complete-apps"}/>
                <Projects title={"small-projects"}/>
            </div>
            <Footer />
        </div>
    );
}

export default AllProjects;
