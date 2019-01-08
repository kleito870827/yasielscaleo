import React from 'react'
import { FaJs, FaNodeJs, FaGithub } from "react-icons/fa";

export default () => (
  <div className="skills">
    <div className="code-editor">
     <div className="tabs">
       <div className="title -javascript"><FaJs className="icon devicon-javascript-plain colored" />Front-End-Skills.js</div>
     </div>
     <div className="content">
       <ul className="lines">
         <li className="line"><span className="linenumber">1</span>
           <span className="comment">// Front End</span>
         </li>
         <li className="line"><span className="linenumber">2</span><span className="orange">HTML5</span></li>
         <li className="line"><span className="linenumber">3</span><span className="blue">CSS3</span></li>
         <li className="line"><span className="linenumber">4</span><span className="red">SASS</span></li>
         <li className="line"><span className="linenumber">5</span><span className="yellow">JavaScript</span><span className="comment"> // and ES6</span></li>
         <li className="line"><span className="linenumber">6</span><span className="light-blue">ReactJS</span><span className="comment"> // and Redux</span></li>
         <li className="line"><span className="linenumber">7</span><span className="blue">jQuery</span></li>
         <li className="line"><span className="linenumber">8</span><span className="purple">Bootstrap</span></li>
       </ul>
     </div>
    </div>
    <div className="code-editor">
     <div className="tabs">
       <div className="title -javascript"><FaNodeJs className="icon devicon-javascript-plain colored" />Back-End-Skills.js</div>
     </div>
     <div className="content">
       <ul className="lines">
         <li className="line"><span className="linenumber">1</span>
           <span className="comment">// Back End</span>
         </li>
         <li className="line"><span className="linenumber">2</span><span className="green">NodeJS</span><span className="comment"> // and ExpressJS</span></li>
         <li className="line"><span className="linenumber">3</span><span className="yellow">Firebase</span></li>
         <li className="line"><span className="linenumber">4</span><span className="green">MongoDB</span><span className="comment"> // and Mongoose</span></li>
         <li className="line"><span className="linenumber">5</span><span className="blue">PHP</span></li>
         <li className="line"><span className="linenumber">6</span><span className="light-blue">WordPress</span></li>
         <li className="line"><span className="linenumber">7</span><span className="blue">SQL</span></li>
         <li className="line"><span className="linenumber">8</span><span className="purple">GraphQL</span><span className="comment"> // in Gatsby</span></li>
       </ul>
     </div>
    </div>
    <div className="code-editor">
     <div className="tabs">
       <div className="title -javascript"><FaGithub className="icon devicon-javascript-plain colored" />General-Skills.js</div>
     </div>
     <div className="content">
       <ul className="lines">
         <li className="line"><span className="linenumber">1</span>
           <span className="comment">// General</span>
         </li>
         <li className="line"><span className="linenumber">3</span><span className="light-blue">Photoshop</span></li>
         <li className="line"><span className="linenumber">3</span><span className="blue">WCAG 2.0</span><span className="comment"> // W3C</span></li>
         <li className="line"><span className="linenumber">3</span><span className="red">Git</span></li>
         <li className="line"><span className="linenumber">2</span><span className="blue">AMP</span></li>
         <li className="line"><span className="linenumber">4</span><span className="red">HTML Mail</span></li>
         <li className="line"><span className="linenumber">5</span><span className="purple">Gatsby</span></li>
       </ul>
     </div>
    </div>
  </div>

)
