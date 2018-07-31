import React from 'react';
import ReactDOM from 'react-dom';
import TodoListContainer from './todos/todo_list_container';


const App = () => (
  <div className="app">
    <h1>Todo List</h1>
    <TodoListContainer />
  </div>
);

export default App;
