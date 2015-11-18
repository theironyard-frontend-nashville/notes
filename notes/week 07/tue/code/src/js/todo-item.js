import React from 'react'
import jQuery from 'jquery';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleCompleted = this.handleCompleted.bind(this);
    this.handleDeleted = this.handleDeleted.bind(this);

    this.state = {
      completed: this.props.todo.completed,
      text: this.props.todo.text
    }
  }
  handleCompleted(e) {
    let completed = this.refs.completed.checked;
    let options = {
      method: 'PUT',
      data: {
        completed: completed
      }
    };

    jQuery.ajax('http://tiny-starburst.herokuapp.com/collections/todos/' + this.props.todo._id, options);

    this.setState({
      completed: completed
    });
  }

  handleDeleted(e) {
    console.log('we called handle deleted on one of our todoitems!');
  }

  render () {
    return (
      <li className="todo">
        <input type="checkbox"
               onChange={this.handleCompleted}
               ref="completed"
               checked={this.state.completed}/>
             <h3>{this.state.text}</h3>
        <button onClick={this.handleDeleted}
                ref="deleted">&times;</button>
      </li>
    )
  }
}

TodoItem.defaultProps = {
  todo: {
    text: "",
    completed: false
  }
};

export default TodoItem;
