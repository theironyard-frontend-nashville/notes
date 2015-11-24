import React from 'react'
import {render} from 'react-dom';
import {Router, Route} from 'react-router';

import Header from './components/header';
import Feed from './components/feed';
import Users from './components/users';
import AuthForm from './components/auth-form';

import User from './models/user';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      loggedIn: false
    }
  }
  componentDidMount() {
    User.subscribe(() => {
      this.setState({
        loggedIn: true
      })
    });
  }
  render(){
    let welcome = (<p>Welcome, you should <a href="/#/login">login</a></p>);

    if (this.state.loggedIn) {
      welcome = (<p>Welcome, goto your <a href="/#/dashboard">dashboard</a></p>);
    }

    return (
      <div>
        <Header/>
        <main>
          {welcome}
          {this.props.children}
        </main>
      </div>
    )
  }
}

const routes = (
  <Router>
    <Route path="/" component={App}>
      <Route name="login" path="login" component={AuthForm} />
      <Route path="register" component={AuthForm} />
      <Route path="dashboard" component={Feed} />
      <Route path="users" component={Users} />
    </Route>
  </Router>
);

render(routes, document.getElementById('app'));
