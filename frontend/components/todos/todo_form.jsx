import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
      id: ''
    };

    this.handleSubmitToDo = this.handleSubmitToDo.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);

  }

  handleSubmitToDo(event) {
    this.setState({id: this.uniqueId()});
    event.preventDefault();
    const { receiveTodo } = this.props;
    const { title, body } = this.state;

    this.props.receiveTodo(this.state);

  }

  handleTitleChange(e) {
    e.preventDefault();
    this.setState({title: e.currentTarget.value});
  }

  handleBodyChange(e) {
    e.preventDefault();
    this.setState({body: e.currentTarget.value});
  }

  uniqueId() {
    return new Date().getTime();
  }

  render() {
    const { receiveTodo } = this.props;
    const { title, body } = this.state;
    return(
     <div className="todo_form">
       <h1>Welcome to our Tea Shop</h1>
       <input value={title} onChange={this.handleTitleChange} placeholder="Buy Groceries"/>
       <input value={body} onChange={this.handleBodyChange} placeholder="Milk,Lettuce,etc."/>
       <button onClick={this.handleSubmitToDo}>Add new task!</button>
     </div>
   );
  }
}
