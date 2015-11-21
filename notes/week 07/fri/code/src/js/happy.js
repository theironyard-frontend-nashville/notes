import React, { PropTypes } from 'react'

class Happy extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render () {
    return (
      <h1>{this.props.params.name} is SO HAPPY</h1>
    )
  }
}

export default Happy;
