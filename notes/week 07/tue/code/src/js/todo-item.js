import React from 'react'

class TodoItem extends React.Component {
  render () {
    return (
      <li className="todo">
        <input type="checkbox"/>
        <h3>{this.props.todo.text}</h3>
        <button>&times;</button>
      </li>
    )
  }
}

export default TodoItem;
