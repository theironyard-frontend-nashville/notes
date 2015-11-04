var HeaderView = Backbone.View.extend({
  className: 'main',
  tagName: 'header',
  template:  _.template($('#headerTemplate').html()),

  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

var PageView = Backbone.View.extend({
  className: 'page home',
  tagName: 'section',
  initialize: function(options){
    this.className = options.className; 
    this.template = options.template;
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});
var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'happy': 'happyRoute',
    'sad': 'sadRoute'
  },

  home: function(){
    var view = new PageView({
      className: 'page home',
      template: _.template($('#homeTemplate').html())
    });
    $('main').html(view.render().el);
  },
  happyRoute: function(){
    var view = new PageView({
      className: 'page happy',
      template: _.template($('#happyTemplate').html())
    });
    $('main').html(view.render().el);
  },
  sadRoute: function(){
    var view = new PageView({
      className: 'page sad',
      template: _.template($('#sadTemplate').html())
    });
    $('main').html(view.render().el);
  }
});

var router = new Router();
Backbone.history.start();


var headerView = new HeaderView();
$('body').prepend(headerView.render().el);
