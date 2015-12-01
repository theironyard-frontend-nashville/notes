import React, { PropTypes } from 'react'
import Replies from './replies';
import AddReply from './add-reply';

export default (props) => (
  <div>
    <h1>{props.question.title}</h1>
    <p>{props.question.description}</p>

    <Replies replies={props.question.replies}
             onUpvote={() => {
              console.log('clicked on upvote in a reply');
            }}
            onDownvote={() => {
              console.log('clicked on downvote in a reply');
            }} />

    <AddReply id={props.question._id} 
              replies={props.question.replies}/>
  </div>
)
