
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Portfolio from './Portfolio'
import Abouttext from '../components/Abouttext'
import './aboutme.css'


const About = () => {
    return (
        <div className="row mt-5">
            <div className="col-md-4">
                <div className="icon-box">
                    <a href>
                        <div className="icon">
                            <img src="assets/images/AboutMe/html.png" alt="" style={{ width: '50%' }} />
                        </div>
                    </a>
                    <a href>
                        <div className="icon">
                            <img src="assets/images/AboutMe/css.png" alt="" style={{ width: '50%' }} />
                        </div>
                    </a>
                    <a href>
                        <div className="icon">
                            <img src="assets/images/AboutMe/js.png" alt="" style={{ width: '54%' }} />
                        </div>
                    </a>
                    <a href>
                        <div className="icon">
                            <img src="assets/images/AboutMe/node-js.png" alt="" style={{ width: '50%' }} />
                        </div>
                    </a>
                    <a href>
                        <div className="icon">
                            <img src="assets/images/AboutMe/sql.png" alt="" style={{ width: '55%' }} />
                        </div>
                    </a>
                    <a href>
                        <div className="icon">
                            <img src="assets/images/AboutMe/mongodb.png" alt="" style={{ width: '50%' }} />
                        </div>
                    </a>
                    <a href>
                        <div className="icon">
                            <img src="assets/images/AboutMe/react.png" alt="" style={{ width: '50%' }} />
                        </div>
                    </a>
                </div>
            </div>
            <div className="col-md-7">
                <div className>
                    <p className="fs-3 text lh-base mt-2">Practiced Developer capable of building web applications from the ground up.
                    Proven experience developing consumer-focused
                    websites using modern technologies.
              <br />
                        <br />
              Designed and developed web applications using multiple APIs, third-party integrations
              and databases.
            </p>
                    <br />
                    <br />
                    <p className="fs-2 text lh-base"><i className="fas fa-arrow-left" />
              &nbsp;&nbsp;Hover over icons to see related skills
            </p>
                    <br /><br />
                    <br /><br />
                    <div className="d-flex checkout">
                        <p className="fs-2 text lh-base">
                            Check out some of my apps&nbsp;
                <i className="fas fa-arrow-right" />&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
                        <a href="portfolio.html" className="btn btn-outline-dark btn-lg" style={{ width: '40%', fontSize: '28px', fontWeight: 700, borderRadius: '20%', borderWidth: '5px' }}>Portfolio</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About
