import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const Home = () => {
  const [task, setTask] = useState({
    title: "",
    description: ""
  });
  const display = () => {
    return(
    {for (const [key, value] of Object.entries(localStorage)) {
      return(
      <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{key}</div>
          {value}
        </div>
      </ListGroup.Item>
    </ListGroup>)
   }} 
  }

  const handleClick = (e) => {
    e.preventDefault();
    console.log(task);
    localStorage.setItem(task.title, task.description);
    setTask("");
    display();
  }

  return (
    <Container style={{
      marginTop: "5rem",
      marginBottom: "5rem",
    }}
    className="flex flex-wrap gap-3">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title Here"  value={task.title ? task.title : ""} onChange={(e)=>{setTask({...task, title: e.target.value})}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Describe Your Task" value={task.description ? task.description : ""} onChange={(e)=>{setTask({...task, description: e.target.value})}}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleClick}>
        Add Task
      </Button>
    </Form>



    </Container>
  );
};

export default Home;
