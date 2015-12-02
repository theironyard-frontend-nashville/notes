import $ from 'jquery';
import React from 'react';
import {Link} from 'react-router';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = {username: this.refs.username.value, password: this.refs.password.value};
    $.ajax({
      url: 'https://api.parse.com/1/users',
      type: 'POST',
      data: JSON.stringify(data)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="username" placeholder="username"/>
        <input type="password" ref="password" placeholder="password"/>
        <input type="submit" value="sign up"/>
        <Link to="login">Already a member? Login</Link>
      </form>
    )
  }
}

export default Signup;
