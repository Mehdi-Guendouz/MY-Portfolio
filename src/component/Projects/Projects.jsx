import React from 'react';
import "./projects.scss"
import Card from './Card';
import { Link } from 'react-router-dom';

const Projects = ({title}) => {
    const view = "View all ~~>"
    return (
        <div className='project-container'>
            <div className="top" data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine">
                <div>
                    <h3><span>#</span>{title}</h3>
                    <div className='line'></div>
                </div>
                <Link to="/projects">{view}</Link>
            </div>
            <div className="work">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default Projects;
