import React from 'react';
import "./Skills.scss"

const Skills = () => {
    return (
        <div className='skills-container'>
            <div className="top">
                <div>
                    <h3><span>#</span>Skills</h3>
                    <div className='line'></div>
                </div>
            </div>
            <div className="bottom">
                <div className="shapes">
                    <img src="./icons/points.png" alt="" className='shape1' />
                    <img src="./icons/points.png" alt="" className='shape2' />
                    <img src="./icons/second.png" alt="" className='shape3' />
                    <div className='square-lg square'></div>
                    <div className='square-sm square'></div>
                </div>
                <div className="content">
                    <div className="item first">
                        <h4>Languages</h4>
                        <p>Js Typescript Python C C++ C#</p>
                    </div>
                    <div className="item second">
                        <h4>DataBases</h4>
                        <p>SQL MongDb GraphQl</p>
                    </div>
                    <div className="item third">
                        <h4>Others</h4>
                        <p>Html css javascript scss </p>
                    </div>
                    <div className="item fourth">
                        <h4>Others</h4>
                        <p>Html css javascript scss </p>
                    </div>
                    <div className="item fifth">
                        <h4>Others</h4>
                        <p>Html css javascript scss </p>
                    </div>
                    <div className="item sixth">
                        <h4>Others</h4>
                        <p>Html css javascript scss </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
