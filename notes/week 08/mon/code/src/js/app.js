import React from 'react'
import {render} from 'react-dom';
import {Router, Route} from 'react-router';

import Header from './components/header';
import Feed from './components/feed';
import Users from './components/users';
import AuthForm from './components/auth-form';


class App extends React.Component {
  render(){
    return (
      <div>
        <Header/>
        <main>
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
