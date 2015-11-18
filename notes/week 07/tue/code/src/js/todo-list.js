import React from 'react';
import jQuery from 'jquery';
import TodoItem from './todo-item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.handleCompleted = this.handleCompleted.bind(this);
  }

  // When a todo item is marked as complete, this function will be called.
  // we bind the id to the callback below, when we create the new <TodoItem/>s.
  handleCompleted(id, e) {
    // Get the checked status from the input that dispatched the clicked/changed event.
    let completed = e.target.checked;
    // create a settings object for our ajax request
    let options = {
      url: 'http://tiny-starburst.herokuapp.com/collections/todos/' + id, // define the resource on the server we want to update
      method: 'PUT', // tell the server that this request is to update that resource
      data: { // tell the server that this is the data that has changed.
        completed: completed
      }
    };
    jQuery.ajax(options);  // invoke the ajax request, but we do not care about the results, we will update the ui anyways, below.


    let data = {
      _id: id,
      completed: completed
    };
    // Call updateTodo on our <App/> component with the data from the updated todoItem.
    this.props.updateTodo(data);
  }

  render() {
    // If we do not have any todo items and the ajax request has not been loaded,
    // then we should display a loading indicator.
    if (!this.props.todos.length && !this.props.hasLoaded) {
      return <div>Loading...</div>
    }

    // Otherwise, let's build a list of TodoItem(s)
    // Binding the handleCompleted callback so that we have access to the todo id
    let todos = this.props.todos.map(todo => {
        return <TodoItem key={todo._id}
                         todo={todo}
                         handleCompleted={this.handleCompleted.bind(this, todo._id)}/>
    });

    return (
      <ul>
        {todos}
      </ul>
    )
  }
}

export default TodoList;
