import React, { PropTypes } from 'react'
import Tweet from './tweet'
import jQuery from 'jquery'

class TwitterFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTweet: 0,
      tweets: []
    }

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
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


  previous() {
    let currentTweet = this.state.currentTweet;
    this.setState({currentTweet: currentTweet - 1});
  }

  next() {
    let currentTweet = this.state.currentTweet;
    this.setState({currentTweet: currentTweet + 1});
  }

  render () {
    let tweet;

    if (this.state.tweets.length && this.state.tweets[this.state.currentTweet]) {
      let currentTweet = this.state.tweets[this.state.currentTweet];
      tweet = <Tweet key={currentTweet.id} username={currentTweet.username} body={currentTweet.body}/>
    }

    let isNextEnabled = this.state.currentTweet < this.state.tweets.length - 1;
    let isPrevEnabled = this.state.currentTweet > 0;

    return (
      <div>
        <ul>
          {tweet}
        </ul>

        <button onClick={this.previous} disabled={!isPrevEnabled}>Previous</button>
        <button onClick={this.next} disabled={!isNextEnabled}>Next</button>
      </div>
    )
  }
}

export default TwitterFeed;
