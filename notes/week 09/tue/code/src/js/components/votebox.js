import React, { PropTypes } from 'react'

export default (props) => (
  <section className="vote">
    <button onClick={props.onUpvote}>+</button>
    <button onClick={props.onDownvote}>-</button>
    <p>{props.votes}</p>
  </section>
)
