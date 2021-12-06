import { Button, Container, Row, Col, Form} from 'react-bootstrap';
import Todos from './Todos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import React, { useState } from 'react';

function App() {

  const [toDoItem, setToDoItem] = useState("");
  const [toDoItems, setToDoItems] = useState([]);

  const onToDoSubmitted = (event) => {
    setToDoItem(event.target.value);
  };

  const OnToDoSend= () => {
    const newToDos = [...toDoItems];
    newToDos.push(toDoItem);
    setToDoItems(newToDos);
  };
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
              <Form.Label>To Do to Enter: </Form.Label>
              </Col>
                <Col>
                <Form.Control type="email" 
                placeholder="Please type an item to do..." 
                onChange={(e) => onToDoSubmitted(e)}
                />
                </Col>
                <Col>
                <Button variant="primary" type="submit" onClick={OnToDoSend}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              </Col>
          </Col>
        </Row>
        <Row>
          <Col>
          <Todos toDoItem={toDoItem} toDoItems={toDoItems} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
