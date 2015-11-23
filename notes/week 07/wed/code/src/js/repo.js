import React from 'react'

class Repo extends React.Component {
  render () {
    return (
      <div className="repo">
        <h3>{this.props.name}</h3>
        <p>{this.props.updated}</p>
        <section className="meta">
          <div className="lang">{this.props.language}</div>
          <div className="stars">{this.props.stars} stars</div>
          <div className="forks">{this.props.forks} forks</div>
        </section>
      </div>
    )
  }
}

export default Repo;
