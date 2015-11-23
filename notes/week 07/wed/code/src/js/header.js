import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="main">
        <h1>{this.props.name}</h1>

        <input placeholder="Search"/>

        <nav>
          <a href="#">Pull Requests</a>
          <a href="#">Issues</a>
          <a href="#">Gists</a>
        </nav>

        <nav className="userNav">
          <a href="#">Alerts</a>
          <a href="#">+</a>
          <a href="#">Avatar</a>
        </nav>
      </header>
    )
  }
}


export default Header;
