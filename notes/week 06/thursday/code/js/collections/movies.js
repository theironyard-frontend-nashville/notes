var Backbone = require('backbone');

var Movies = Backbone.Collection.extend({
  url: 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json',
  parse: function(data){
    return data.movies;
  }
});

module.exports = new Movies();
