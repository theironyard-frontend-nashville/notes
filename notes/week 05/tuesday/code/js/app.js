// Define a new "recipe" that can cook later.
var PostView = Backbone.View.extend({
  tagName: 'section', // we want our container element to be a section (this.$el)
  className: 'post', // we want our container elefment to have a class post
  template: _.template($('#postTemplate').html()), // create a template from our html source

  // add a click listener for the link that has a like class, and run the like post function
  events: {
    'click .like': 'likePost',
  },

  // This runs automatically whenenever a new view is instantiated
  initialize: function(options){
    // options comes in when we define a new view and pass options into the constructor call
    this.post = options.post;
  },

  // We call render manually, somewhere else.
  render: function() {
    // This will modify the automatically generated element's html.
    // We will use the template that we defined above, and pass data into the template function call
    // so that we can have access to that data inside of the function template.
    this.$el.html(this.template({post: this.post}));

    // If this post has been liked by ANYONE, we will add the liked class to the container.
    if (this.post.liked === 'true') {
      this.$el.addClass('liked');
    }

    // So, now, this.$el has our new HTML. But, it has not been added to the screen yet.
    // We add it to the screen elsewhere. By referencing the element's $el property.
    // See the viewPost method on our AppRouter for an example.
  },

  // This will add a class called liked, whenever the .like link is clicked.
  likePost: function(event){
    var postId = this.post._id;
    this.$el.addClass('liked');

    $.ajax('https://tiny-starburst.herokuapp.com/collections/egdelwonk2/' + postId, {
      method: 'PUT',
      data: {
        liked: true
      }
    });

    // Prevent the browser from navigating to a new location
    event.preventDefault();
  }
});

// Define a new recipe that we can cook later.
var AppRouter = Backbone.Router.extend({
  // Define the urls that we want to make accessible by the user:
  // the key is the url, the value is the function that we want to invoke
  // when the url is accessed.
  routes: {
    "": "main",
    "posts": "main",
    "posts/:postId": "viewPost"
  },

  // This runs when we access the index.html page, or '#'
  main: function() {
    // Get all of the posts
    $.ajax('https://tiny-starburst.herokuapp.com/collections/egdelwonk2').done(function(data){
      // Reset the posts container to have empty html
      $('.posts').html('');
      // For every posts that was returned, we want append a new container to the posts container
      data.forEach(function(post){
        $('.posts').append('<div><a href="#posts/'+ post._id +'">' + post.title + '</a></div>');
      })
    });
  },

  // This is called when we access a url that matches the pattern /posts/:id,
  // where ":id" is a unique identifier.
  viewPost: function(postId) {
    // Get the individual post by id from the server
    $.ajax('https://tiny-starburst.herokuapp.com/collections/egdelwonk2/' + postId)
     .done(function(post){
       // Make a new post view
        var view = new PostView({
          post: post // Pass in the post data from the server, as options to the post view
        });

        view.render(); // modify our view elements $el property —> using the template + data
        $('.posts').html(view.$el); // This is what renders that element to the screen.
      });
  }
});

// Create a new instance of our App router,
// so that we can handle routes, such as /posts, /posts/:id, etc.
var router = new AppRouter();

// Listen for url changes, so that we can intercept them,
// and act upon the urls that the user navigates to.
Backbone.history.start();
