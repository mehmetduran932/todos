export const addTodo = (todos) => {
  return { type: "ADD_TODO", payload: todos };
};

export const removeTodo = (todos) => {
  return { type: "REMOVE_TODO", payload: todos };
};
