import { combineReducers } from 'redux';
import _ from 'lodash';


const questions = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_QUESTIONS':
      return action.questions;
    case 'RECEIVE_VOTES':
      let index = findById(state, action.id);
      return updateItem(state, index, {
        votes: action.votes
      });
    default:
      return state;
  }
}

const questionsById = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_QUESTION':
      return Object.assign({}, state, {
        [action.id]: action.question
      });
    default:
      return state;
  }
}


const findById = (items, id) => {
  return _.findIndex(items, item => {
    return item._id === id;
  });
};

const updateItem = (data, index, changes) => {
  return [
    ...data.slice(0, index), // takes the elements from our existing cart, until the index of our match  and adds to the array
    Object.assign({}, data[index], changes),
    ...data.slice(index + 1) // takes the remaining elements AFTER the matches index and adds to the array
  ]
};

const removeItem = (data, index) => {
  return [
    ...data.slice(0, index),
    ...data.slice(index + 1)
  ]
};



// this is the root reducer
export default combineReducers({ questions, questionsById });
