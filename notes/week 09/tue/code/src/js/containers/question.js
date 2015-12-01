import React, { PropTypes } from 'react'

import Store from '../store';
import { fetchQuestion } from '../actions';
import Question from '../components/question-detail';

class QuestionContainer extends React.Component {
  componentDidMount() {
    const {id} = this.props.params;
    Store.dispatch(fetchQuestion(id));

    Store.subscribe(() => {      
      this.forceUpdate();
    });
  }
  render () {
    const {id} = this.props.params;
    const state = Store.getState().questionsById;

    if (!state[id]) {
      return (<div>Loading.....</div>)
    }

    const question = {
      ...state[id]
    };

    return (
      <Question question={question}/>
    )
  }
}

export default QuestionContainer;
