import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tanmay Giram </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am recent B-Tech Graduate.  
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Consistency is key!"{" "}
          </p>
          <footer className="blockquote-footer">Tanmay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
