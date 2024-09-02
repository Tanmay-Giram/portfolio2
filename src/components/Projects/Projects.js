import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.png";
import passwordGenerator from "../../Assets/Projects/passwordGenerator.png";
import bubblePop from "../../Assets/Projects/bubblePop.png";
import countriesInfo from "../../Assets/Projects/countriesInfo.png";
import quickShop from "../../Assets/Projects/quickShop.png"
import virtualTryOnClothing from "../../Assets/Projects/virtualTryonClothing.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={virtualTryOnClothing}
              isBlog={false}
              title="Virtual Try-On Clothing"
              description=" Leveraging advanced image processing and augmented reality, this system allows users to virtually try on clothing at home. By detecting keypoints from a pose detection model, a static T-shirt image is dynamically rendered onto a person in real-time using a live camera feed, ensuring precise positioning and seamless integration."
              ghLink="https://github.com/NishantWankhade/App-a-thon"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quickShop}
              isBlog={false}
              title="Quick Shop"
              description="An e-commerce site built with React, featuring Sanity as the backend, Stripe for payment integration, and Mapbox API for calculating the shortest delivery route. Developed during a 24-hour offline hackathon.."
              ghLink="https://github.com/Tanmay-Giram/infothon_Qshop"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={countriesInfo}
              isBlog={false}
              title="Country Info"
              description="A responsive web application built with HTML, CSS, and JavaScript that integrates the REST Countries API. Users can search, filter, and explore detailed country information, including flag images and border countries. The app features a light/dark mode switch and adapts seamlessly to different screen sizes."
              ghLink="https://github.com/Tanmay-Giram/CountriesInfo"
              demoLink="https://countriesbytanmay.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bubblePop}
              isBlog={false}
              title="Bubble Pop"
              description="A web game where players pop bubbles to match a target number displayed on the screen. Features a real-time scoreboard and a 1-minute timer that ends the game. Built while exploring JavaScript fundamentals like event bubbling and DOM manipulation."
              ghLink="https://github.com/Tanmay-Giram/bubbleGame"
              demoLink="https://bubblegamebytanmay.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo Lists With Integrated Local Storage"
              description="A task management app built with Vite and Tailwind, where users can add, edit, delete, and modify to-dos. The app interacts with system storage, saving and updating tasks in real time using local storage."
              ghLink="https://github.com/Tanmay-Giram/todo"
              demoLink="https://todobytanmay.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passwordGenerator}
              isBlog={false}
              title="Password Generator"
              description="A customizable password generator built with Vite & Tailwind, featuring a scrollbar for selecting password length and checkboxes for including or excluding numbers and characters. This project helped me learn useEffect, useRef, and useCallback."
              ghLink="https://github.com/Tanmay-Giram/passwordGenerator"
              demoLink="https://passwordgeneratorbytanmay.netlify.app/"
            />
          </Col>
        </Row>  
      </Container>
    </Container>
  );
}

export default Projects;
