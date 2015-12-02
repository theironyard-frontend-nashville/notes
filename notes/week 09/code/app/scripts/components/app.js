import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unicorns: []
    };
    this.handleUnicornData = this.handleUnicornData.bind(this);
  }

  handleUnicornData(data) {
    this.setState({unicorns: data.results})
  }

  componentDidMount() {
    $.ajax({
      url: 'https://api.parse.com/1/classes/unicorn',
      success: this.handleUnicornData
    });
  }

  render() {
    let childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {unicorns: this.state.unicorns})
    });
    return (
      <div>
        <header>
          <h1>Unicorn Friends!</h1>
          <nav>
            <Link to="profile">Profile</Link>
            <Link to="/">Browse</Link>
            <Link to="login">Login</Link>
          </nav>
        </header>
        {childrenWithProps}
      </div>
    )
  }
}

export default App;
