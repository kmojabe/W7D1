import React from 'react';
import TodoListContainer, { todos, receiveTodo } from './todo_list_container';
import {TodoListItem} from './todo_list_item';
import TodoForm from './todo_form';

module.exports = (props) => (
  <ul>
    {props.todos.map((todo) => TodoListItem(todo))}
    <TodoForm receiveTodo = { props.receiveTodo } />
  </ul>
);
