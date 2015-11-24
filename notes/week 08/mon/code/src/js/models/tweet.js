import $ from 'jquery';
import _ from 'lodash';
import User from './user';


class Tweet {
  getAllTweets(done) {
    let url = 'https://twitterapii.herokuapp.com/tweets.json?include=user';
    return $.ajax(url).then(response => {
      let users = _.values(response.included).reduce((total, next) => {
        total[next.id] = next.attributes.email;
        return total;
      }, {});


      let tweets = response.data.map(tweet => {
        let user_id = tweet.relationships.user.data.id;
        return {
          id: tweet.id,
          email: users[user_id],
          body: tweet.attributes.body,
          created: tweet.attributes.created_at
        };
      });

      done(null, tweets);
    }).fail(error => {
      done(error);
    });
  }

  add(tweet, done){
    let url = 'https://twitterapii.herokuapp.com/tweets';

    let options = {
      url: url,
      data: {
        tweet: {
          body: tweet
        }
      },
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${User.access_token}`
      }
    }
    return $.ajax(options).then(response => {
      done(null, response);
    }).fail(error => {
      done(error);
    })
  }

  getCurrentUserTweets() {
    // current user
  }

  getUserTweets(user) {

  }
}

export default Tweet;
