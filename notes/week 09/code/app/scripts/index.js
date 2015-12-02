import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

import setup from './setup';
import App from './components/app';
import UnicornList from './components/unicornList';
import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/profile';

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={UnicornList} />
      <Route path="profile" component={Profile} />
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
    </Route>
  </Router>
), document.getElementById('app'));
