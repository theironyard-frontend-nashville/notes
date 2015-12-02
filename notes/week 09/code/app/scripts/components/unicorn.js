import React from 'react';

class Unicorn extends React.Component {
  render() {
    return (
      <li>{this.props.name}</li>
    )
  }
}

export default Unicorn;
