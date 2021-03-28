import React from 'react'

import banner from '../images/top-banner.jpg'
import bottom_banner from '../images/bottom-banner.jpg'
import html from '../images/html.jpg'
import css from '../images/css.jpg'
import js from '../images/js.jpg'
import react from '../images/react.jpg'
import node from '../images/node.jpg'
import mongodb from '../images/mongodb.jpg'
import vue from '../images/vue.jpg'
import angular from '../images/angular.jpg'

const Home = () => {
    return (
        <div className="main-container">
            <div className="banner">
                <img src={banner} alt="banner"/>
            </div>
            <h1 class="title">Junior Web Developer In London</h1>
            <h2 class="skills-title">SKILLS</h2>
            <ul className="skills">
                <li className="skill">
                    <img src={html} alt="html"/>
                    <p className="html">HTML</p>
                </li>
                <li className="skill">
                    <img src={css} alt="css"/>
                    <p className="css">CSS</p>
                </li>
                <li className="skill">
                    <img src={js} alt="javascript"/>
                    <p className="js">JavaScript</p>
                </li>
                <li className="skill">
                    <img src={react} alt="react"/>
                    <p className="react">React</p>
                </li>
                <li className="skill">
                    <img src={node} alt="node"/>
                    <p className="node">Node</p>
                </li>
                <li className="skill">
                    <img src={mongodb} alt="mongodb"/>
                    <p className="mongodb">MongoDB</p>
                </li>
                <li className="skill">
                    <img src={vue} alt="vue"/>
                    <p className="vue">Vue</p>
                </li>
                <li className="skill">
                    <img src={angular} alt="angular"/>
                    <p className="angular">Angular</p>
                </li>
            </ul>
            <div className="bottom-banner">
                <img src={bottom_banner} alt="bottom banner"/>
            </div>

            <div className="mail">
                <input placeholder="Email..."/>
                <button>Subscribe</button>
            </div>

            </div>

    )
}

export default Home