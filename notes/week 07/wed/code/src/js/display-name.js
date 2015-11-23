import React from 'react'

class DisplayName extends React.Component {
  render () {
    return (
      <section className="displayName">
        <h2>{this.props.name}</h2>
        <h3>{this.props.username}</h3>
      </section>
    )
  }
}

export default DisplayName;
