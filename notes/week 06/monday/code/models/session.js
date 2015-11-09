App.Models.Session = Backbone.Model.extend({
  url: 'https://twittertiy.herokuapp.com/oauth/token',
  defaults: {
    grant_type: 'password',
    username: '',
    password: ''
  }
});
