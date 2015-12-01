import React, { PropTypes } from 'react'
import VoteBox from './votebox';

export default (props) => {
  const replies = props.replies.map(reply => {
    return (
      <div key={reply._id}>
        <VoteBox onUpvote={props.onUpvote}
                onDownvote={props.onDownvote}
                votes={reply.votes} />
        <p>{reply.body}</p>
        <footer>
          {reply.username} / {reply.votes}
        </footer>
      </div>
    )
  })
  return (
    <section className="replies">
      {replies}
    </section>
  )
}
