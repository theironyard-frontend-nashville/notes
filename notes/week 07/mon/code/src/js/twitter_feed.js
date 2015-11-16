import React, { PropTypes } from 'react'
import Tweet from './tweet'
import jQuery from 'jquery'

class TwitterFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    }
  }

  componentDidMount() {
    jQuery.ajax("http://twitter-pi.herokuapp.com/tweets.json?include=user").then( response => {
      let users = response.included.reduce((current, user) => {
        current[user.id] = user.attributes.email;
        return current;
      }, {});


      let tweets = response.data.map(tweet => {
        return {
          id: tweet.id,
          username: users[tweet.relationships.user.data.id],
          body: tweet.attributes.body,
          created: tweet.attributes.created_at
        }
      });

      this.setState({
        tweets,
        users
      });
    });
  }

  render () {
    let tweetItems = this.state.tweets.map(tweet => {
      return (<Tweet key={tweet.id} username={tweet.username} body={tweet.body}/>)
    })

    return (
      <ul>
        {tweetItems}
      </ul>
    )
  }
}

export default TwitterFeed;
