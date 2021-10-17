import { Container,Row,Col } from "reactstrap";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs="4">
          </Col>
          <Col xs="4">
          <TodoList></TodoList>
          </Col>
          <Col xs="4">
          </Col>

        </Row>
        </Container>
      
    </div>
  );
}

export default App;
