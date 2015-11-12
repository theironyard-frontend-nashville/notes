var Backbone = require('backbone');
var $ = require('jquery');

var collection = require('./collections/movies');
var views = {
  List: require('./views/movies/list'),
  Detail: require('./views/movies/detail')
};

var Router = Backbone.Router.extend({
  routes: {
    "": "main",
    "movie/:id": "view"
  },

  main: function () {
    $('.details').html('');
  },

  view: function(id) {
    var view = new views.Detail({
      model: collection.get(id)
    });
    $('.details').html(view.render().el);
  }
});

function buildSidebar(){
  var view = new views.List({
    collection: collection
  });
  collection.fetch().then(function(){
    $('.sidebar').html(view.render().el);
    Backbone.history.start();
  }.bind(this));
}

module.exports = new Router();
buildSidebar();
