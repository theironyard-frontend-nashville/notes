import React from 'react'
import User from '../models/user';

class Header extends React.Component {
  componentDidMount() {
    User.subscribe(() => {
      this.forceUpdate();
    });
  }

  render () {
    let authNav = (
      <nav>
        <a href="#/login">Login</a>
        <a href="#/register">Register</a>
      </nav>
    )

    if (User.isLoggedIn()) {
      authNav = (
        <nav>
          <a href="#/dashboard">Dashboard</a>
        </nav>
      )
    }

    return (
      <header className="main">
        <h1><a href="#/">Twitterz</a></h1>

        <a href="#/">
          <img src="http://www.fillmurray.com/60/60" alt="Avatar" title="Bill... f'ing murray"/>
        </a>

        {authNav}
      </header>
    )
  }
}

export default Header;
