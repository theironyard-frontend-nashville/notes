import React, { PropTypes } from 'react'
import User from '../models/user';
import createLocation from 'history/lib/createLocation';

class AuthForm extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();

    let email = this.refs.email.value;
    let password = this.refs.password.value;

    if (email && password) {
      User.login({
        username: email,
        password: password
      }, (error, data) => {
        if (!error) {
          console.log(User.isLoggedIn());
        } else {
          alert('we had an error');
        }
      });
    } else {
      alert('You messed up. Try again.');
    }
  }

  handleRegister(e) {
    e.preventDefault();

    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let passwordConfirm = this.refs.passwordConfirm.value;

    if (email && password && password === passwordConfirm) {
      User.register({
        email: email,
        password: password
      }, (error, data) => {
        if (!error) {
          // this.props.history.pushState(null, '/#/login'); // TODO: Fix me
        } else {
          alert('we had an error');
        }
      });
    } else {
      alert('You messed up. Try again.');
    }
  }

  render () {
    let routeUrl = this.props.route.path;
    let confirmPwd;
    let submitBtn = <input type="submit" value="Login" onClick={this.handleLogin}/>
    let actionLink = <a href="#/register">Not a user? Try registering.</a>

    if (routeUrl === 'register') {
      confirmPwd = <input ref="passwordConfirm" type="password" name="confirm_password" placeholder="Confirm Password"/>
      submitBtn = <input type="submit" value="Register" onClick={this.handleRegister}/>
      actionLink = <a href="#/login">Already a user? Try logging in.</a>
    }

    return (
      <section className="login">
        <form>
          <input ref="email" type="text" name="email" placeholder="E-mail"/>
          <input ref="password" type="password" name="password" placeholder="Password"/>
          {confirmPwd}
          {submitBtn}
        </form>

        {actionLink}
      </section>
    )
  }
}

export default AuthForm;
