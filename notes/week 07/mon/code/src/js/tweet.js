import React, { PropTypes } from 'react'

function Tweet(props){
  return (
    <li className="tweet">
      <p>{props.username}</p>
      <p>{props.body}</p>
    </li>
  )
}

export default Tweet;
