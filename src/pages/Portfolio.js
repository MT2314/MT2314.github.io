
import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import "./portfolio.css"

const Portfolio = () => {
    return (
        < section >
            <div className="projectsSlides container">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                        <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active carItem">
                            <h2>Date Night Planner</h2>
                            <a href="https://ivanduranic.github.io/date-night-planner/"><img src="assets/images/Date-Night-Planner.png" className="projectImg d-block w-100" alt="..." />
                            </a><div className="carousel-caption d-none d-md-block"><a href="https://ivanduranic.github.io/date-night-planner/">
                            </a>
                                <p>A Date-Night Planner application made using HTML, CSS, JavaScript, Mapbox/Google Maps API,
              Yelp API, GraceNote Developer, Firebase. </p>
                            </div>
                        </div>
                        <div className="carousel-item carItem">
                            <h2>Dynamic Day Planner</h2>
                            <a href="https://mt2314.github.io/Dynamic-Day-Planner/">
                                <img src="/assets/images/Day-Planner.png" className="projectImg d-block w-100" alt="..." />
                            </a>
                            <div className="carousel-caption d-none d-md-block">
                                <p>Daily Planner
              Dynamically Built, Using Moment to Keep Date, and Color Coded Time Slots</p>
                            </div>
                        </div>
                        <div className="carousel-item carItem">
                            <h2>True Weather Application</h2>
                            <a href="https://mt2314.github.io/True-Weather-App/">
                                <img src="assets/images/True-Weather.png" className="projectImg d-block w-100" alt="..." />
                            </a>
                            <div className="carousel-caption d-none d-md-block">
                                <p>Display's Current and 5 Day Weather Updated Weather for multiple cities in the world
            </p>
                            </div>
                        </div>
                        <div className="carousel-item carItem">
                            <h2>Burger Ordering System</h2>
                            <a href="https://burger-ordersystem.herokuapp.com/">
                                <img src="assets/images/burgerOrderingSystem.jpg" className="projectImg d-block w-100" alt="..." />
                            </a>
                            <div className="carousel-caption d-none d-md-block">
                                <p>A Burger Order Management System. Input is stored into a SQL database. Application is modelled in MVC. Home-made ORM.</p>
                            </div>
                        </div>
                        <div className="carousel-item carItem">
                            <h2>Note Taker</h2>
                            <a href="https://web-note-application.herokuapp.com/">
                                <img src="assets/images/noteTaker.png" className="projectImg d-block w-100" alt="..." />
                            </a>
                            <div className="carousel-caption d-none d-md-block">
                                <p>Save notes and ideas on our website</p>
                            </div>
                        </div>
                        <div className="carousel-item carItem">
                            <h2>Employee Management</h2>
                            <a href="https://snowmanagement.herokuapp.com/">
                                <img src="assets/images/Employee-Management.jpg" className="projectImg d-block w-100" alt="..." />
                            </a>
                            <div className="carousel-caption d-none d-md-block">
                                <p>An Employee Management System. Using Sequelize,Handle Bars,Passport,   </p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section >
    )
}

export default Portfolio
