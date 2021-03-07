
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Portfolio from '../Portfolio'
import Abouttext from '../../components/Abouttext'
import './aboutme.css'

import photo from "./images/mike.jpg"
import html from "./images/html.png"
import css from "./images/css.png"
import js from "./images/js.png"
import nodejs from "./images/node-js.png"
import sql from "./images/sql.png"
import mongodb from "./images/mongodb.png"
import react from "./images/react.png"

const About = () => {
    return (
        <>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="photo">
                        <img className="photo" src={photo} alt="" />
                    </div>
                </div>
                <div className="col-md-7">
                    <div >
                        <p className="fs-3 text lh-base mt-2">Practiced Developer capable of building web applications from the ground up.
                        Proven experience developing consumer-focused
                        websites using modern technologies.
                        <br />
                            <br />
              Designed and developed web applications using multiple APIs, third-party integrations
              and databases.
                    </p>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="icon-box">
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={js} alt="" />
                    <img src={nodejs} alt="" />
                    <img src={sql} alt="" />
                    <img src={mongodb} alt="" />
                    <img src={react} alt="" />
                </div>
            </div>
        </>
    );
}

export default About
