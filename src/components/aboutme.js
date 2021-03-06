import React from 'react'
import Pdf from './naveencv_compressed.pdf'
import './aboutme.css';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

const aboutMe = () =>{

    return(

       <div id="AboutMeSection">
                <h1 id="aboutme">About me</h1>
 <p>Hello again, welcome to my website! I'm Naveen, a second-year Software Engineering student studying at the Victoria University of Wellington. I am highly motivated and finished my first year with flying colours. I am at this stage looking for a Summer internship to further develop and refine the skills I have. My long term aspiration is to eventually work in the Cybersecurity field.</p>  <p>Please note this website is a work in progress so there are some bugs that need to be worked out.</p>
 <p>Here are some of the languages I am working with</p> 
                <ul className="ColoredList">
                   <li>Java</li>
                   <li>C++</li>
                  <li>C</li>
                  <li>Sql</li>
                  </ul>
             <ul>
                 <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
              </ul>
              
                <h2>Education</h2>
                 <p>Victoria University of Wellington - Bachelor of Engineering with Honours</p>
                 <p>March 2017 - Present</p>
                 <p>Heretaunga College - Graduated as Proxime Accessite with NCEA Levels 1,2, and 3 excellence endorsed (99, 90, 72 credits respectively) </p>
                 <p>February 2013 - December 2017</p>
                 <h1>Want more information?</h1>         
                 <p className="resumelink">I have attached my resume right <b><a href={Pdf} target = "_blank">here</a></b>.</p>
                </div>   

    );
}
export default aboutMe