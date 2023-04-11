import React from "react";
import Card from "react-bootstrap/Card";
import { Avatar } from "@mui/material";
import Ariel from "../../images/Ariel.png"
function ariel() {
  return (
    <div>
      <Card>
        <Card.Header className="fw-bold">Ariel Stitt
        <Card.Subtitle className="fw-light text-muted">
            Technical Instructor 
            <br />
              Software Engineering Boot Camp Instructor
            </Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Avatar
            alt="Ariel"
            src={Ariel}
            sx={{ width: 150, height: 150 }}
            className="avatar-card"
          />
          <br />
          <Card.Title>Master of organization, a thoughtful and
            collaborative learner</Card.Title>
          <Card.Text>
            Lorivie always pushes herself to excel. She asks great questions to
            keep me on my toes, does her research to find the answers, and goes
            the extra mile. A master of organization, a thoughtful and
            collaborative learner, and a pleasure to work with in my class.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ariel;
