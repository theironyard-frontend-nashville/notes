import $ from 'jquery';

class User {
  constructor() {
    this.access_token = null;
    this.refresh_token = null;
    this.token_expires = null;
    this.token_created = null;
    this.listeners = [];
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  dispatch() {
    this.listeners.forEach(callback => {
      callback();
    });
  }

  isLoggedIn() {
    return this.access_token !== null;
  }

  register(data, done) {
    let url = 'https://twitterapii.herokuapp.com/users';

    let options = {
      url: url,
      method: 'POST',
      data: {
        user: data
      }
    };

    $.ajax(options).then(response => {
      done(null, response);
    }).fail(error => {
      done(error);
    });
  }

  login(data, done) {
    let url = 'https://twitterapii.herokuapp.com/oauth/token';
    data.grant_type = 'password';

    let options = {
      url: url,
      method: 'POST',
      data: data
    };

    $.ajax(options).then(response => {
      let {access_token, refresh_token, expires_in, created_at} = response;

      this.access_token = access_token;
      this.refresh_token = refresh_token;
      this.token_expires = expires_in;
      this.token_created = created_at;

      this.dispatch();
      //store credentials to a cookie locally or in local storage

      done(null, response);
    }).fail(error => {
      done(error);
    });


  }

  logout() {
    // ajax stuff here!
    this.token = null;
  }
}

export default new User();
