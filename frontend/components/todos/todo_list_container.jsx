import { connect } from 'react-redux';
import TodoList from './todo_list';
import { receiveTodo, receiveTodos } from '../../actions/todo_actions';
import {allTodos} from '../../reducers/selectors';

const mapStateToProps = (state) => ({ // map slice of state to props object
	todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({ // create action dispatcher
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  // receiveTodos: todos => dispatch(receiveTodos(todos))
});

const TodoListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

export default TodoListContainer;
