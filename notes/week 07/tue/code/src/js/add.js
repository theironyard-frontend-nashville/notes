import React from 'react';
import jQuery from 'jquery';

class Add extends React.Component {
  constructor(props) {
    super(props);

    // any time the handle key press function is invoked
    // the this keyword will reference -this- instance
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    // do some stuff
    let key = e.which;
    let ENTER_KEY = 13;

    if (key === ENTER_KEY) {
      let task = this.refs.task.value;
      this.saveTask(task);
      this.refs.task.value = '';
    }
  }

  saveTask(task){
    let options = {
      method: 'POST',
      data: {
        text: task,
        completed: false
      }
    };

    jQuery.ajax('http://tiny-starburst.herokuapp.com/collections/todos', options)
          .then( response => {
            this.props.handleAdd(response);
          });
  }

  render() {
    return (
      <input type="text"
             placeholder="What do you need done today?"
             onKeyPress={this.handleKeyPress}
             ref="task"/>
    )
  }
}


export default Add;
