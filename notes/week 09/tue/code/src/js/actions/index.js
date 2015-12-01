import fetch from 'isomorphic-fetch';
import _ from 'lodash';

const URL_ROOT = 'http://tiny-starburst.herokuapp.com/collections/questions';

function requestQuestions() {
  return {
    type: 'REQUEST_QUESTIONS'
  }
}

function requestQuestion(id) {
  return {
    type: 'REQUEST_QUESTION',
    id
  }
}

function receiveQuestions(json) {
  return {
    type: 'RECEIVE_QUESTIONS',
    questions: json,
    receivedAt: Date.now()
  }
}


function receiveQuestion(id, json) {
  return {
    type: 'RECEIVE_QUESTION',
    id,
    question: json,
    receivedAt: Date.now()
  }
}

function requestUpvote(id) {
  return {
    type: 'REQUEST_UPVOTE',
    id
  }
}

function requestDownvote(id) {
  return {
    type: 'REQUEST_DOWNVOTE',
    id
  }
}

function requestReply(id) {
  return {
    type: 'REQUEST_REPLY',
    id
  }
}


function receiveVotes(id, votes) {
  return {
    type: 'RECEIVE_VOTES',
    id,
    votes
  }
}

export function fetchQuestions() {
  return dispatch => {
    dispatch(requestQuestions());
    return fetch(URL_ROOT)
      .then(response => response.json())
      .then(json => dispatch(receiveQuestions(json)))
  }
}

export function fetchQuestion(id) {
  return dispatch => {
    dispatch(requestQuestion(id));
    return fetch(`${URL_ROOT}/${id}`)
      .then(response => response.json())
      .then(json => dispatch(receiveQuestion(id, json)))
  }
}

function updateVotes(id, votes) {
  return (dispatch) => {
    let data = {
      votes: votes
    }
    return fetch(`${URL_ROOT}/${id}`, {
      method: 'put',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(json => dispatch(receiveVotes(id, json.votes)))
  }
}

export function upvoteQuestion(id, votes) {
  return (dispatch) => {
    dispatch(requestUpvote(id));
    dispatch(updateVotes(id, votes + 1))
  }
}

export function downvoteQuestion(id, votes) {
  return (dispatch) => {
    dispatch(requestDownvote(id));
    dispatch(updateVotes(id, votes - 1))
  }
}

export function addReply(body, id, replies) {
  return dispatch => {
    dispatch(requestReply(id));
    let _id = _.last(replies)._id + 1;
    let data = {
      replies: [
        ...replies,
        {
          _id,
          username: 'wgolden',
          votes: 0,
          body
        }
      ]
    }
    return fetch(`${URL_ROOT}/${id}`, {
      method: 'put',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(data)
   })
    .then(response => response.json())
    .then(json => dispatch(receiveQuestion(id, json)))
  }
}
