import React from 'react';
import "./projects.scss"
import Card from './Card';

const Projects = ({title}) => {
    const view = "View all ~~>"
    return (
        <div className='project-container'>
            <div className="top">
                <div>
                    <h3><span>#</span>{title}</h3>
                    <div className='line'></div>
                </div>
                <span>{view}</span>
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
