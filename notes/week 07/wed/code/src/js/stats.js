import React from 'react'

class Stats extends React.Component {
  render () {
    return (
      <section className="stats">
        <a href=""><span>{this.props.followers}</span> Followers</a>
        <a href=""><span>{this.props.starred}</span> Starred</a>
        <a href=""><span>{this.props.following}</span> Following</a>
      </section>
    )
  }
}

export default Stats;
