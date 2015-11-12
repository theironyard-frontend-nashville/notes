var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var List = Backbone.View.extend({
  template: _.template($('#MovieListTemplate').html()),
  render: function(){
    this.$el.html(this.template({
      movies: this.collection.toJSON()
    }));
    return this;
  }
});

module.exports = List;
