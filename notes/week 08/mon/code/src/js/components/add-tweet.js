import React from 'react'
import User from '../models/user';
import Tweet from '../models/tweet';

const ENTER_KEY = 13;

class AddTweet extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  handleClick(e){
    this.addTweet();
    e.preventDefault();
  }

  handleKeypress(e) {
    if (e.which === ENTER_KEY) {
      this.addTweet();
    }
  }

  addTweet() {
    let tweet = this.refs.tweet.value;
    let model = new Tweet();
    model.add(tweet, (error, response) => {
      console.log('done!', response);
    });
  }

  render () {
    if (!User.isLoggedIn()) {
      return <div/>
    }

    return (
      <section className="addTweet">
        <input ref="tweet" onKeyPress={this.handleKeypress}/>
        <button onClick={this.handleClick}>Send</button>
      </section>
    )
  }
}

export default AddTweet;
