import React from 'react'
import Card from "react-bootstrap/Card";
import Placeholder from "../../images/Placeholder.png"
import { Avatar } from "@mui/material";

function ariel() {
  return (
    <div>
        <Card>
        <Card.Header>Ariel</Card.Header>
        <Card.Body>
          <Avatar
            alt="Ariel"
            src={Placeholder}
            sx={{ width: 150, height: 150 }}
            className="avatar-card"
          />
          <Card.Title>Short Headline</Card.Title>
          <Card.Text>
            Supporting Text here
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ariel