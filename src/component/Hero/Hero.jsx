import React , {useState, useEffect} from 'react';
import "./Hero.scss"
import { Link } from 'react-router-dom';

const Hero = () => {

    const words = ["Front-End", "Back-End", "Full Stack"];

    const TypingEffect = ({words}) => {
        const [currentWordIndex, setCurrentWordIndex] = useState(0);
        const [currentWord, setCurrentWord] = useState("");
      
        useEffect(() => {
            let currentIndex = 0;
            let word = ''
            const intervalId = setInterval(() => {
              word = word + words[currentWordIndex][currentIndex]
              setCurrentWord(word);
              currentIndex++;
              if (currentIndex === words[currentWordIndex].length) {
                clearInterval(intervalId);
                setTimeout(() => {
                  setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                  setCurrentWord("");
                }, 1000);
              }
            }, 200);
        
            return () => clearInterval(intervalId);
          }, [currentWordIndex, words]);
        
          return <span className='typing'>{currentWord}</span>;
      };

      // cursor position for the colorful line
      // const [position, setPosition] = useState({ x: 0, y: 0 });

      // const handleMouseMove = (event) => {
      //   setPosition({ x: event.clientX, y: event.clientY });
      // };



    return (


        <div className='hero-container' >
          {/* <div
            style={{
              position: 'absolute',
              left: position.x,
              top: position.y,
              height: '2px',
              width: '100%',
              backgroundColor: 'blue',
            }}
          /> */}
            <div className="left">
                <h1>Hi!! I AM Mehdi Your <TypingEffect words={words} /> <br /><span className='typing'>Web Developer</span></h1>
                <p>Crafting digital experiences with passion and <br /> precision</p>
                <Link to={"/"}>Contact me !!</Link>
            </div>
            <div className="right">
                <img src="./images/portfolioTest.JPG" alt="" />
                <div className='card'>
                    <div className="square"></div>
                    currently working on  <span> portfolio</span>
                </div>
            </div>
        </div>
    );
}

export default Hero;
