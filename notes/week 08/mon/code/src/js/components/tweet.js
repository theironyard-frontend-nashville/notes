import React from 'react'

class Tweet extends React.Component {
  render () {
    return (
      <article className="tweet">
        <header>
          <h2>{this.props.tweet.email}</h2>
          <time>{this.props.tweet.created}</time>
        </header>
        <img src="https://www.placecage.com/70/70" alt="User Avatar" title="User Avatar"/>
        <section className="content">
          <p>{this.props.tweet.body}</p>
        </section>
      </article>
    )
  }
}

export default Tweet;
