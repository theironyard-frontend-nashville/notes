App.Collections.Tweets = Backbone.Collection.extend({
  url: 'https://twittertiy.herokuapp.com/tweets',
  model: App.Models.Tweet
});
