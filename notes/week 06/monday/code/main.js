var App = {};
App.Models = {};
App.Views = {};
App.Collections = {};

App.Router = Backbone.Router.extend({
  routes: {
    '' : 'tweets',
    'login': 'login',
    'signup': 'signup',
    'user/:id': 'user'
  },
  tweets: function() {
    var tweetsView = new App.Views.TweetsView({
      collection: new App.Collections.Tweets()
    });
    tweetsView.collection.fetch({
      success: function(collection, data, options){
        tweetsView.render();
        $('main').html(tweetsView.el);
        console.log('tweets route')
      },
      error: function() {}})    
  },
  login: function() {
    var loginView = new App.Views.LoginView({
      model: new App.Models.Session(),
      // password: 'coolpassword'
    });
    loginView.render();
    $('main').html(loginView.el);
  },
  signup: function() {
    console.log('signup route');
  },
  user: function() {
    console.log('user route');
  }
});


$('document').ready(function() {
  App.router = new App.Router();
  Backbone.history.start();
})
