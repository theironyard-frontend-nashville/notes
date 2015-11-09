App.Views.LoginView = Backbone.View.extend({
  initialize: function(options) {
    // this.password = options.password;
    console.log('you made a login view', arguments);
  },
  tagName: 'form',
  template: _.template($('#loginTemplate').html()),
  render: function() {
    this.$el.html(this.template());
  },
  events: {
    'click #loginBtn' : 'logIn'
  },
  logIn: function(event) {
    event.preventDefault();
    var username = $('#loginEmail').val();
    var password = $('#loginPassword').val();
    this.model.set({
      password: password,
      username: username
    });
    this.model.save(null, {
      success: function(model, response, options) {
        $.ajaxSetup({
          headers: {
            Authorization: 'Bearer ' + response.access_token
          }
        });
        console.log('success', model, response);
        App.router.navigate('', {trigger: true});
      },
      error: function(model, response, options) {}
    });
  }
});
