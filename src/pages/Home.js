import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";

const Home = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const [items, setItems] = useState([
    {
      title: "",
      description: "",
    },
  ]);
  const display = () => {
    {
      items &&
        items.map((e, i) => {
          return (
            <Accordion>
              <Accordion.Item eventKey={i}>
                <Accordion.Header>{e.title}</Accordion.Header>
                <Accordion.Body>{e.description}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        });
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setItems("");
    localStorage.setItem(task.title, task.description);
    for (const [key, value] of Object.entries(localStorage)) {
      setItems((list) => [
        ...list,
        {
          title: key,
          description: value,
        },
      ]);
    }
    console.log(items);
    setTask("");
    display();
  };

  

  return (
    <Container
      style={{
        marginTop: "5rem",
        marginBottom: "5rem",
      }}
      className="flex flex-wrap gap-3"
    >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title Here"
            value={task.title ? task.title : ""}
            onChange={(e) => {
              setTask({ ...task, title: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Describe Your Task"
            value={task.description ? task.description : ""}
            onChange={(e) => {
              setTask({ ...task, description: e.target.value });
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleClick}>
          Add Task
        </Button>
        <ListGroup className="mt-4">
          {items &&
            items.map((e,i) => {
              return (
                <Accordion>
                  <Accordion.Item eventKey={i}>
                    <Accordion.Header>{e.title}</Accordion.Header>
                    <Accordion.Body>{e.description}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              );
            })}
        </ListGroup>
      </Form>
    </Container>
  );
};

export default Home;
