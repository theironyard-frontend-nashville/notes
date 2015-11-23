import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <header className="main">
        <h1>Twitterz</h1>

        <img src="http://www.fillmurray.com/60/60" alt="Avatar" title="Bill... f'ing murray"/>

        <nav>
          <a href="#/login">Login</a>
          <a href="#/register">Register</a>
        </nav>
      </header>
    )
  }
}

export default Header;
