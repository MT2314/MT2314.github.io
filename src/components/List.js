import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import 'fontsource-roboto';
import { ListGroup } from "react-bootstrap"
import { Divider } from "@material-ui/core";


// Images
// import EmployeeManagementSystem from "./Images/Employee-Management.jpg";
// import BurgerOrderingSystem from "./Images/burgerOrderingSystem.jpg";
// import DateNightPlanner from "./Images/Date-Night-Planner.png";
// import StoryBook from "./Images/StoryBook.jpg";
// import NoteTaker from "./Images/noteTaker.png";
// import TrueWeather from "./Images/True-Weather.png";



const List = ({ projectChange }) => {


  return (

    <>

    <div style={{ marginTop: 200, marginRight: 50 }}>
      <ListGroup as="ul" >
        <ListGroup.Item as="li" onClick={(e) => projectChange(e)}>
          Employee Management System
        </ListGroup.Item>
        <ListGroup.Item as="li" onClick={(e) => projectChange(e)} >
          Burger Ordering System
          </ListGroup.Item>
        <ListGroup.Item as="li" onClick={(e) => projectChange(e)}>
          Date Night Planner
        </ListGroup.Item>
        <ListGroup.Item as="li" onClick={(e) => projectChange(e)} >
          Story Book 
          </ListGroup.Item>
          <ListGroup.Item as="li" onClick={(e) => projectChange(e)} >
          Note Taker
          </ListGroup.Item>
          <ListGroup.Item as="li" onClick={(e) => projectChange(e)} >
          True Weather
          </ListGroup.Item>
      </ListGroup>
    </div>
    </>
  );
}

export default List;