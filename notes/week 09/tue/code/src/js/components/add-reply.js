import React, { PropTypes } from 'react'
import Store from '../store';

import { addReply } from '../actions';
const ENTER_KEY = 13;

class AddReply extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleKeyPress (e) {
    const value = this.refs.reply.value;
    if (e.which === ENTER_KEY && e.shiftKey && value) {
      Store.dispatch(addReply(value, this.props.id, this.props.replies));
      this.refs.reply.value = '';
    }
  }

  handleClick (e) {
    const value = this.refs.reply.value;
    if (value) {
      Store.dispatch(addReply(this.refs.reply.value, this.props.id, this.props.replies));
      this.refs.reply.value = '';
    }
  }

  render () {
    return (
      <section className="addReply">
        <textarea ref='reply' onKeyPress={ this.handleKeyPress }></textarea>
        <button onClick={ this.handleClick }>Add Reply</button>
      </section>
    )
  }
}

export default AddReply;
