import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link} from 'react-router';

import Header from './header';
import Footer from './footer';
import List from './list';
import Detail from './detail';
import Happy from './happy';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <main>
          {this.props.children}
        </main>
        <aside className="sidebar">
          <List/>
        </aside>
        <Footer/>
      </div>
    )
  }
}

let routes = (
  <Router>
    <Route path='/' component={App}>
      <Route path='/detail/:id' component={Detail}>
        <Route path='/detail/:id/:name' component={Happy}/>
      </Route>
    </Route>
  </Router>
);

render(routes, document.getElementById('app'));
