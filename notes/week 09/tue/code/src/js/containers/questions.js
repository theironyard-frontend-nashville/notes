import React, { PropTypes } from 'react'
import Store from '../store';
import { fetchQuestions, upvoteQuestion, downvoteQuestion } from '../actions';
import Questions from '../components/questions';

class QuestionsContainer extends React.Component {
  componentDidMount() {
    Store.dispatch(fetchQuestions());

    Store.subscribe(() => {
      this.forceUpdate();
    });
  }
  render () {
    const state = Store.getState();
    const { questions } = state;
    return (
      <Questions questions={questions}
                onUpvote={(id, votes) => {
                  Store.dispatch(upvoteQuestion(id, votes));
                }}
                onDownvote={(id, votes) => {
                  Store.dispatch(downvoteQuestion(id, votes));
                }}
      />
    )
  }
}

export default QuestionsContainer;
