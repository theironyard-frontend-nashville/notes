var Post = Backbone.Model.extend({
  urlRoot: 'https://tiny-starburst.herokuapp.com/collections/posts2'
});

var Posts = Backbone.Collection.extend({
  url: 'https://tiny-starburst.herokuapp.com/collections/posts2',
  model: Post
});


var HomePage = Backbone.View.extend({
  template: _.template($('#homePageTemplate').html()),
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

var PostList = Backbone.View.extend({
  template: _.template($('#postListTemplate').html()),
  events: {
    'click .expand': 'expand'
  },

  render: function(){
    this.$el.html(this.template({
      posts: this.collection.toJSON()
    }));
    return this;
  },

  expand: function(event){
    $(event.target).parent().siblings().removeClass('expanded');
    $(event.target).parent().toggleClass('expanded');

    if(!$(event.target).closest('ul').children().hasClass('expanded')){
      event.preventDefault();
      router.navigate('', {trigger: true});
    }
  }
});

var PostDetail = Backbone.View.extend({
  template: _.template($('#postDetailTemplate').html()),
  render: function(){
    this.$el.html(this.template({
      post: this.model.toJSON()
    }));
    return this;
  }
});

var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'post/:id': 'viewPost'
  },

  home: function(){
    // Create a new home page view
    var mainView = new HomePage();
    // Render the template to the view
    mainView.render();
    // Render the view to the main tag
    $('main').html(mainView.el);
  },

  viewPost(postId){
    var model = new Post({
      id: postId
    });

    model.fetch().then(function(){
      var view = new PostDetail({
        model: model
      });
      view.render();
      $('main').html(view.el);
    });
  }
});

function buildSidebar(){
  var collection = new Posts();
  // Create a new home page view
  var sidebarView = new PostList({
    collection: collection
  });

  collection.fetch({
    success: function(){
      // Render the template to the view
      sidebarView.render();
      // Render the view to the main tag
      $('.sidebar').html(sidebarView.el);
    }
  });
}


buildSidebar();
var router = new Router();
Backbone.history.start();


$(window).load(function() {
  $('.raptor').raptorize({
    'enterOn' : 'click',
    'delayTime' : 5000
  });
});
