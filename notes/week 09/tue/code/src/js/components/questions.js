import React, { PropTypes } from 'react'
import Question from './question';

export default (props) => {
  const questions = props.questions.map(question => {
    return (
      <Question key={question._id}
                question={question}
                onUpvote={ () => {
                  props.onUpvote(question._id, question.votes)
                }}
                onDownvote={() => {
                  props.onDownvote(question._id, question.votes)
                }}
      />
    )
  });

  return (
    <section className="questions">
      {questions}
    </section>
  )
}
