// Make a new model, so that we can save our post data to the server.
var Post = Backbone.Model.extend({
  // When we make a new Post,
  // this will use the POST Method to create a new post record to this URL.
  url: 'https://tiny-starburst.herokuapp.com/collections/chat'
});

// Make a new posts collection, so that we can fetch all of the posts from the server.
var Posts = Backbone.Collection.extend({
  // Tell the collection that we want all of the items in our server to be of type Post.
  model: Post,
  // When we fetch all of the posts, Backbone will use the GET method to retrieve data from this URL.
  url: 'https://tiny-starburst.herokuapp.com/collections/chat'
});

// Create a new view definition so that we can handle ui interactions
var InputBox = Backbone.View.extend({
  // Change the default tag name from div to section
  tagName: 'section',
  // Listen for events that happen within our view instance
  events: {
    'keypress .msg': 'handleEnter', // When a user presses a key on the message input
    'click .send': 'handleSendClick' // When a user clicks on the send button
  },

  // Is called after handleEnter and handleSendClick is run
  send: function(){
    // Find the input value for the name input, and store it
    var name = this.$('.name').val();
    // Find the input value for the msg input, and store it
    var msg = this.$('.msg').val();

    // Check to see if the name is empty string
    // If it is, alert the user of their error, and return immediately
    // to prevent any other code in this function from running.
    if (name.trim() === '') {
      alert('yoo.. whats your name');
      return;
    }

    // Check to see if the message is empty string
    // If it is, alert the user of their error, and return immediately
    // to prevent any other code in this function from running.
    if (msg.trim() === '') {
      alert('yoo.. whats your msg...');
      return;
    }

    // Create a post model, so that we can prepare to send our data to the server
    // with a POST method request.
    var post = new Post({
      name: name,
      message: msg,
      created: Date.now()
    });

    // Actually send the data to the server
    post.save();

    // Add our newly created post model to our posts collection,
    // so that we can keep the list up to date.
    postsCollection.add(post);

    // Reset the message input to be empty after a successful post addition.
    this.$('.msg').val('');
  },

  // Listen for keypresses, the event handler is defined up in the events key above
  handleEnter: function(event){
    // if the event keycode is the enter key (13), then call the send function
    if (event.keyCode === 13) {
      this.send();
    }
  },

  // Listen for clicks, the event handler is defined up in the events key above
  handleSendClick: function(event){
    // Prevent the default browser behavior (navigation/form submission)
    event.preventDefault();

    // Call the send function
    this.send();
  },

  render: function(){
    // Update the automatically generated
    // element's html to whatever we want it to be.
    var html = $('#inputBoxTemplate').html();
    this.$el.html(html);

    // Return the reference to this instance
    return this;
  }
});

// Create a new blueprint for the individual entry items
var ItemView = Backbone.View.extend({
  // Add a classname "entry" to the automatically generated element
  className: "entry",
  // Change the automatically generated element tag type to article
  tagName: 'article',

  // create a new template based on a template script tag in our index.html file
  template: _.template($('#itemViewTemplate').html()),

  render: function(){
    // Read the model data that was passed into our view at creation time
    // and convert it to a JSON string.
    var data = this.model.toJSON();

    // Set the automatically created element's html to be the return value
    // from calling our tempalte function, and passing in our model data as context
    this.$el.html(this.template(data));

    // return this reference to this instance
    return this;
  }
});

// Create a blueprint for our container of posts
var ListBox = Backbone.View.extend({
  // Change the default tag name from div to section
  tagName: 'section',

  // This runs automatically whenever a new instance is instantiated with the new keyword
  initialize: function(){
    // Tell this view that we are interested in changes on our collection
    // when a collection is .fetch() or sync(), we will automatically call the render function
    // on this view.
    this.listenTo(this.collection, 'fetch sync', this.render);
  },

  render: function(){
    // store a temporary reference to this instance so that we can
    // call it by name, inside of a callback.
    var view = this;

    // For each model in our collection, do something
    this.collection.each(function(model){

      // create a new item view
      // and pass the model reference into that view
      var item = new ItemView({
        model: model
      });
      // render the new item view, updating it's automatically generated element's html
      item.render();

      // Add the new item view's element to our current view's html with append
      view.$el.append(item.el);
    });
  }
});

// Make a new instance of an InputBox view
var inputbox = new InputBox();

// make a new instance of our posts collection
var postsCollection = new Posts();

// Create a new instance of our listbox container
// passing in the created collection
var listbox = new ListBox({
  collection: postsCollection
});

// Fetch data from the server for our collection
// and define a success callback, when the server responds with the data
postsCollection.fetch({
  success: function(){
    // append the listbox element to the main tag on our index.html
    $('main').append(listbox.el);
  }
});

// Render the inputbox and update the automatically generated element's html
inputbox.render();

// Display the inputbox view onto the page
$('main').append(inputbox.el);
