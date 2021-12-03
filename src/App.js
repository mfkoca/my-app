import { Button, Container, Row, Col, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import React, { useState } from 'react';

function App() {

  const [toDoItem, setToDoItem] = useState(false);
  const OnToDoSend= () => {};
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1> To Do </h1>
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
              <Col>
              <Form.Label>Email address</Form.Label>
              </Col>
                <Col>
                <Form.Control type="email" placeholder="Please type an item to do..." />
                </Col>
                <Col>
                <Button variant="primary" type="submit" onClick={OnToDoSend}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
