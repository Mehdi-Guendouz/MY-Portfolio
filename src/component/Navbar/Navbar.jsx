import React, { useState  } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./Navbar.scss"
import { GoMarkGithub } from 'react-icons/go';
import { SiLinkedin } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const path = useParams()
    console.log(path)
    
    return (
        <div className='nav-container'>
            <div className='falling-contact'>
                <div className="line-div"></div>
                <div className="icons">
                    <a href='https://github.com/MehidGN' target='_blank' rel="noreferrer"><GoMarkGithub className='icon'/></a>
                    <a href='https://www.linkedin.com/in/mehdi-guendouz-06b59b225/' target='_blank' rel="noreferrer"><SiLinkedin className='icon'/></a>
                    <a href="mailto:m_guendouz@estin.dz" target='_blank' rel="noreferrer"><MdEmail className='icon'/></a>
                </div>
            </div>
            {/* <img src="" alt="" /> */}
            <h1>Mehdi</h1>
            <nav>
                <ul>
                    <li><Link ><span>#</span>home</Link></li>
                    <li><Link ><span>#</span>work</Link></li>
                    <li><Link ><span>#</span>about-me</Link></li>
                    <li><Link ><span>#</span>Contacts</Link></li>
                </ul>
            </nav>

            {/* sidebar  */}

            {!menu ? <img src="./icons/burger.png" alt="menu" className='menu-icons' onClick={() => setMenu(prev => !prev)}/> : <img src="./icons/close.png" alt="menu" onClick={() => setMenu(prev => !prev)}  className='menu-icons'/>}
            {menu && <div className="sidebar-container">
                <div className="sidebar">
                    <div className="links">
                        <Link ><span>#</span>home</Link>
                        <Link ><span>#</span>work</Link>
                        <Link ><span>#</span>about-me</Link>
                        <Link ><span>#</span>Contacts</Link>
                    </div>
                    <div className="link-icon">
                        <a href='https://github.com/MehidGN' target='_blank' rel="noreferrer"><GoMarkGithub className='icon'/></a>
                        <a href='https://www.linkedin.com/in/mehdi-guendouz-06b59b225/' target='_blank' rel="noreferrer"><SiLinkedin className='icon'/></a>
                        <a href="mailto:m_guendouz@estin.dz" target='_blank' rel="noreferrer"><MdEmail className='icon'/></a>
                    </div>
                </div>
            </div>}
            
        </div>
    );
}

export default Navbar;
