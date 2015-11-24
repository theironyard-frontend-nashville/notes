import React from 'react'
import Tweet from './tweet';

import AddTweet from './add-tweet';
import TweetModel from '../models/tweet'


class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };

  }
  componentDidMount() {
    let model = new TweetModel();
    model.getAllTweets((error, tweets) => {
      if (error) {
        alert('we got an error');
      } else {
        this.setState({
          tweets: tweets
        });
      }
    });
  }

  render () {
    let items = this.state.tweets.map(tweet => {
      return <Tweet key={tweet.id} tweet={tweet}/>
    });

    if (!items) {
      return (<p>Loading.... hang in there little guy.</p>);
    }

    return (
      <div>
        <AddTweet />
        <section className="feed">
          {items}
        </section>
      </div>
    )
  }
}

export default Feed;
