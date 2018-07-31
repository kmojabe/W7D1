import  { RECEIVE_TODO, RECEIVE_TODOS, receiveTodo, receiveTodos } from "../actions/todo_actions.js";

const initialState = {
  1: {
    id: 5,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 6,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {

  const newState = Object.assign({}, state);

  const _defaultTodos = {};

  switch (action.type) {
    case RECEIVE_TODO:
      newState[action.todo.id] = action.todo;
      return newState;
    case RECEIVE_TODOS:
      let todosState = _defaultTodos;
      action.todos.forEach( todo => {
        todosState[todo.id] = todo;
      });
      return todosState;
    default:
      return state;
  }
};

export default todosReducer;
