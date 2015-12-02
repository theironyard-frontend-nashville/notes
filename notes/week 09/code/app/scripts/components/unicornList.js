import React from 'react';

import Unicorn from './unicorn';

class UnicornList extends React.Component {
  render() {
    let unicorns = this.props.unicorns.map( unicorn => {
      return (
        <Unicorn key={unicorn.objectId} name={unicorn.name}/>
      )
    });
    return (
      <ul>
        {unicorns}
      </ul>
    )
  }
}

export default UnicornList;
