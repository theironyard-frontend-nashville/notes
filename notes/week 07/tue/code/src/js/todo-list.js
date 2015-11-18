import React from 'react';
import TodoItem from './todo-item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate() {
    console.log('called handle update!');
  }

  render() {
    if (!this.props.todos.length && !this.props.hasLoaded) {
      return <div>Loading...</div>
    }

    let todos = this.props.todos.map(todo => {
        return <TodoItem key={todo._id} todo={todo} handleUpdate={this.handleUpdate}/>
    });

    return (
      <ul>
        {todos}
      </ul>
    )
  }
}

export default TodoList;
