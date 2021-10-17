export const addTodo = (todos) => {
  return { type: "ADD_TODO", payload: todos };
};

export const removeTodo = (todos) => {
  console.log(todos)
  return { type: "REMOVE_TODO", payload:todos};
};
