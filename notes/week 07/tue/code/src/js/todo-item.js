import React from 'react'
import jQuery from 'jquery';

class TodoItem extends React.Component {
  render () {
    // Add event listeners for checkbox change and also for deletion.
    // On change / click we call the parent's handlers that was sent to us through this.props.
    // ie. this.props.handleCompleted
    let completed = this.props.todo.completed; // Get our completed state from the properties that was passed to us
    let checked = completed === 'true' || completed === true; // check if the completed state is true, if so, then we mark the checkbox as checked
    return (
      <li className="todo">
        <input type="checkbox"
               onChange={this.props.handleCompleted}
               ref="completed"
               checked={checked}/>
             <h3>{this.props.todo.text}</h3>
        <button onClick={this.props.handleDeleted}
                ref="deleted">&times;</button>
      </li>
    )
  }
}
// Set default properties on our todo item
// so that if we forget to send them in elsewhere,
// the rendering will not fail.
TodoItem.defaultProps = {
  todo: {
    text: "",
    completed: false
  }
};

export default TodoItem;
