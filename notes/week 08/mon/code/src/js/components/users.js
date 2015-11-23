import React, { PropTypes } from 'react'
import $ from 'jquery';

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }
  componentDidMount() {
    $.ajax('https://twitterapii.herokuapp.com/users.json').then(response => {
      this.setState({
        users: response.data
      });
    });
  }
  render () {
    let items = this.state.users.map(user => {
      let url = `http://lorempixel.com/60/60/people/?${user.id}`;
      return (
        <div className="user" key={user.id}>
          <img src={url} alt="Avatar"/>
          <h2>{user.attributes.email}</h2>
          <p>{user.attributes.created_at}</p>
        </div>
      )
    });
    return (
      <section className="users">
        {items}
      </section>
    )
  }
}

export default Users;
