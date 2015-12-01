import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute} from 'react-router';

import App from './containers/app';
import Questions from './containers/questions';
import Question from './containers/question';


const app = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Questions} />
      <Route path="questions/:id" component={Question}/>
    </Route>
  </Router>
);

render(app, document.getElementById('root'));
