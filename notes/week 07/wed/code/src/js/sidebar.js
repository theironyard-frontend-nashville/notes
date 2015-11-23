import React from 'react';

import Avatar from './avatar';
import DisplayName from './display-name';
import UserDetails from './user-details';
import Stats from './stats';
import Organizations from './organizations';

class Sidebar extends React.Component {
  render() {
    return (
      <aside className="sidebar">
        <Avatar src={this.props.profile.avatar_url} height="60px"/>
        <DisplayName name={this.props.profile.name} username={this.props.profile.login}/>
        <UserDetails company={this.props.profile.company}
                     location={this.props.profile.location}
                     joined={this.props.profile.created_at}
                     blog={this.props.profile.blog}/>
        <Stats followers={this.props.profile.followers} following={this.props.profile.following}  starred="16"/>
        <Organizations url={this.props.profile.organizations_url}/>
      </aside>
    );
  }
}

export default Sidebar;
