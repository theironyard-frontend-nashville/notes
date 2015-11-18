// Import our third party libraries for our use.
import React from 'react';
import jQuery from 'jquery';

// Define our new Add Component
class Add extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  // Handle the keypress event
  handleKeyPress(e) {
    // store a reference to the keypress
    let key = e.which;
    let ENTER_KEY = 13; // we know that the enter key is key 13

    // if the key that was pressed was the enter key
    // we want to save the task to the server and update our todos list`
    if (key === ENTER_KEY) {
      let task = this.refs.task.value;
      this.saveTask(task);
      this.refs.task.value = '';
    }
  }

  // updates the task on the server
  saveTask(task){
    // Create a settings object so we can configure our ajax call
    let options = {
      method: 'POST', // POST will tell the server that we are creating a new todo
      data: { // the data that we want the server to save.
        text: task,
        completed: false
      }
    };
    // Invoke the server save, passing in our settings object
    jQuery.ajax('http://tiny-starburst.herokuapp.com/collections/todos', options)
          .then(function(response) { // then is run when a success is returned from the server, passing in the data to the callback
              this.props.handleAdd(response); // call the parent's handleAdd function that was passed to us through this.props
          });
  }
  // render is called automatically
  render() {
    // Render the add input and add the keypress event handler to it.
    return (
      <input type="text"
             placeholder="What do you need done today?"
             onKeyPress={this.handleKeyPress}
             ref="task"/>
    )
  }
}

// export the add component so we can import it elsewhere.
export default Add;
