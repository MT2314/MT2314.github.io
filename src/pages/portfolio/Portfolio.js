
import React, { useState } from "react";
// import { Carousel } from "react-bootstrap";
import "./portfolio.css"
// Components
import List from "../../components/List";
import ProjectCarousal from "../../components/Carousal";

// Images
import burger from "./images/burgerOrderingSystem.jpg";
import EmployeeManagementSystem from "./images/Employee-Management.jpg";
import BurgerOrderingSystem from "./images/burgerOrderingSystem.jpg";
import DateNightPlanner from "./images/Date-Night-Planner.png";
import StoryBook from "./images/StoryBook.jpg";
import NoteTaker from "./images/noteTaker.png";
import TrueWeather from "./images/True-Weather.png";

const Portfolio = () => {

    // const list = document.getElementsByClass
    const allLi = document.getElementsByTagName('li');
    // console.log(allLi);

    const [image, setImage] = useState();

    const projectChange = (e) => {
        [...allLi].forEach(li => {
            li.style.backgroundColor = 'white';
            li.style.color = 'black';
        })
        e.target.style.backgroundColor = 'green';
        e.target.style.color = 'white';

        switch (e.target.innerText) {
            
            case 'Employee Management System':
                console.log('hi')
                setImage(EmployeeManagementSystem)
                break;

            case 'Burger Ordering System':
                console.log('hi')
                setImage(BurgerOrderingSystem)
                break;

            case 'Date Night Planner':
                console.log('hi')
                setImage(DateNightPlanner)
                break;

            case 'Story Book':
                console.log('hi')
                setImage(StoryBook)
                break;

            case 'Note Taker':
                console.log('hi')
                setImage(NoteTaker)
                break;

            case 'True Weather':
                console.log('hi')
                setImage(TrueWeather)
                break;



        }
        console.log(e.target.innerText);

    }


    return (
        <div className="row">
            <div className="col-md-6 container">
                <List projectChange={projectChange} />
            </div>
            <div className="col-md-6 container">
                <ProjectCarousal image={image} />
            </div>
        </div>



        // < section >

        //     <Carousel>
        //         <Carousel.Item>
        //             <img
        //                 className="d-block w-100"
        //                 src={burger}
        //                 alt="First slide"
        //             />
        //             <Carousel.Caption>
        //                 <h3>First slide label</h3>
        //                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item>
        //             <img
        //                 className="d-block w-100"
        //                 src="holder.js/800x400?text=Second slide&bg=282c34"
        //                 alt="Second slide"
        //             />

        //             <Carousel.Caption>
        //                 <h3>Second slide label</h3>
        //                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item>
        //             <img
        //                 className="d-block w-100"
        //                 src="holder.js/800x400?text=Third slide&bg=20232a"
        //                 alt="Third slide"
        //             />

        //             <Carousel.Caption>
        //                 <h3>Third slide label</h3>
        //                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //     </Carousel>


        /* 
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
                    </div> */
        // </section >
    )
}

export default Portfolio
