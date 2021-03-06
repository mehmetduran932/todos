import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "../actions/todoAction";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

function TodoList({ addTodo, removeTodo, todos }) {
<<<<<<< HEAD
  const [todoItem, setTodoItem] = useState("");

=======
  console.log(todos);

  const [todoItem, setTodoItem] = useState("");

  useEffect(() => {}, [todoItem]);

>>>>>>> d784aecaefee75444c90d80b27b09809b0f329bc
  const todoRemove = (listItem) => {
    let filtered = [];
    filtered = todos.filter((item) => item !== listItem);
    removeTodo(filtered);
  };

  const ekleTodo = () => {
    if (todoItem.length === 0) {
      alert("boş değer eklenemez");
    } else {
      addTodo(todoItem);
    }
    setTodoItem("");
  };

  return (
    <div>
      <h1>TodoList</h1>
      <div>
        <input
          type="text"
          name="todoItem"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        ></input>
      </div>
      <Button name="save" color="success" size="lg" onClick={() => ekleTodo()}>
        Todo Ekle
      </Button>

      {todos.map((item) => (
        <ListGroup key={item.id}>
          <ListGroupItem>
            {item.baslik}
            {
              <Button
                name="remove"
                color="danger"
                onClick={() => todoRemove(item)}
              >
                X
              </Button>
            }
          </ListGroupItem>
        </ListGroup>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo, removeTodo })(TodoList);
