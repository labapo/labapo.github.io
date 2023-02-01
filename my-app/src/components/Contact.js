import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Contact = () => {
  return (
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="first-name">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="name" placeholder="First Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="last-name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="name" placeholder="First Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
