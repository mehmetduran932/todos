const INITIAL_STATE = {
  todos: [
    {
      id: 0,
      baslik: "default Item",
    },
  ],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          {
            id: state.todos.length,
            baslik: action.payload,
          },
          ...state.todos,
        ],
      };

    case "REMOVE_TODO":
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
};
