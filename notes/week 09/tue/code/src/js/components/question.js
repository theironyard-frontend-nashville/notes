import React from 'react'
import Votebox from './votebox';

export default (props) => {
  const url = `#/questions/${props.question._id}`;
  return (
    <div className="question">
      <VoteBox onUpvote={props.onUpvote}
              onDownvote={props.onDownvote}
              votes={props.question.votes} />
      <section className="content">
        <h2>
          <a href={url}>
            {props.question.title}
          </a>
        </h2>
        <p>{props.question.username}</p>
      </section>
  </div>
  )
};
