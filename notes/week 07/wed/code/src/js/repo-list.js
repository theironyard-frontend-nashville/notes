import React from 'react'
import Repo from './repo';

class RepoList extends React.Component {
  render () {
    let repos = this.props.repos.map(repo => {
      return (
        <Repo key={repo.id}
              name={repo.name}
              updated={repo.updated}
              language={repo.language}
              forks={repo.forks}
              stars={repo.stargazers_count}/>
      )
    });

    return (
      <section className="repos">
        {repos}
      </section>
    )
  }
}

export default RepoList;
