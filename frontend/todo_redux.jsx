import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import App from './components/app';
import Root from './components/root';
import {allTodos} from './reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;

  window.allTodos = allTodos(store.getState());
  window.receiveTodos = receiveTodos;
  const root = document.getElementById('root');
  ReactDOM.render( <Root store={store} />, root);
});
