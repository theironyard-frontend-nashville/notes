App.Views.TweetsView = Backbone.View.extend({
  template: _.template($('#tweetsTemplate').html()),
  render: function() {
    this.$el.html(this.template());
    console.log('rendered the tweets view');
  },
  events: {
    'keypress #tweetInput' : 'handleTweet'
  },
  handleTweet: function(event) {
    if (event.keyCode === 13) {
      var tweet = $('#tweetInput').val();
      $('#tweetInput').val('');
      this.collection.create({
        tweet: {
          body: tweet
        }
      });
      console.log(this.collection);
    }
  }
});
