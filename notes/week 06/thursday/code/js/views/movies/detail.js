var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var Detail = Backbone.View.extend({
  template: _.template($('#MovieDetailTemplate').html()),
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

module.exports = Detail;
