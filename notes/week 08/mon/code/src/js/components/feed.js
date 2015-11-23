import React from 'react'
import Tweet from './tweet';

const TWEETS = [
  {id: 1, email: 'egdelwonk@gmail.com', created_at: '1010101010', body: 'hello how are you?'},
  {id: 2, email: 'egdelwonk@gmail.com', created_at: '1231313112', body: 'yellow mustard :(X)'},
  {id: 3, email: 'egdelwonk@gmail.com', created_at: '1010101010', body: 'pickles and bacon'}
];

class Feed extends React.Component {
  render () {
    let items = TWEETS.map(tweet => {
      return <Tweet key={tweet.id} tweet={tweet}/>
    });

    return (
      <section className="feed">
        {items}
      </section>
    )
  }
}

export default Feed;
