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
      console.log("eklendi");
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
      console.log(action.payload);
      console.log("sildi");
      return {
        ...state,
        todos: action.payload,
      };

    default:
      console.log("girdi");
      return state;
  }
};
