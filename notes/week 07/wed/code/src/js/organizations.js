import React from 'react'
import jQuery from './token';

class Organizations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      organizations: []
    };
  }
  componentWillReceiveProps(nextProps) {
    if (!this.state.loaded && nextProps.url) {
      jQuery.ajax(nextProps.url).then(response => {
        this.setState({
          loaded: true,
          organizations: response
        });
      });
    }
  }
  render () {
    let organizations = this.state.organizations.map(org => {
        return (
          <img key={org.id} src={org.avatar_url} alt={org.login} title={org.login} height="30px"/>
        )
    });

    return (
      <section className="organizations">
        {organizations}
      </section>
    )
  }
}

export default Organizations;
