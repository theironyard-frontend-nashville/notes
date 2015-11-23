import React from 'react'

class UserDetails extends React.Component {
  render () {
    let blog;

    if (this.props.blog) {
      blog = <li>{this.props.blog}</li>
    }
    return (
      <ul className="userDetails">
        <li>{this.props.company}</li>
        <li>{this.props.location}</li>
        {blog}
        <li>{this.props.joined}</li>
      </ul>
    )
  }
}

export default UserDetails;
