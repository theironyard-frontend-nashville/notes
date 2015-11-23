import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
import Sidebar from './sidebar';
import RepoList from './repo-list';
import jQuery from './token';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {},
      repos: []
    }
  }

  getRepos() {
    let url = 'https://api.github.com/users/egdelwonk/repos';
    jQuery.ajax(url).then(response => {
      this.setState({
        repos: response
      })
    });
  }

  getProfile() {
    let url = 'https://api.github.com/users/egdelwonk';
    jQuery.ajax(url).then(response => {
      this.setState({
        profile: response
      })
    });
  }

  componentDidMount() {
    this.getProfile();
    this.getRepos();
  }

  render(){
    return (
      <div className="wrapper">
        <Header name="Github"/>
        <Sidebar profile={this.state.profile}/>
        <main>
          <RepoList repos={this.state.repos}/>
        </main>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
