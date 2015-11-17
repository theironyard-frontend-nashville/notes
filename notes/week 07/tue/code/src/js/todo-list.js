import React from 'react';
import jQuery from 'jquery';
import TodoItem from './todo-item';

class TodoList extends React.Component {
  constructor(props) {
    // do all the stuff that our react.component's constructor would
    // normally do.
    super(props);

    // once we are done with that... lets do our own stuff

    // set our initial state
    this.state = {
      hasLoaded: false,
      todos: []
    }
  }

  render() {
    if (!this.state.todos.length && !this.state.hasLoaded) {
      return <div>Loading...</div>
    }

    let todos = this.state.todos.map(todo => {
        return <TodoItem key={todo._id} todo={todo} />
        // return <TodoItem key={todo.id}
        //                  text={todo.text}
        //                  completed={todo.completed}
        //                  todoId={todo.id} />
    });
    return (
      <ul>
        {todos}
      </ul>
    )
  }
}

export default TodoList;
