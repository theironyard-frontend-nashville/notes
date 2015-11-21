import React, { PropTypes } from 'react'

let restaurants = [
  {name: 'Hattie B\'s', rank: 10, url: 'hattie-bs'},
  {name: 'Bolton\'s', rank: 9, url: 'boltons'},
  {name: 'Prince\'s', rank: 11, url: 'princes'}
]
class List extends React.Component {
  render () {
    let items = restaurants.map(r => {
      let url = `/#/detail/${r.url}`;
      return (
        <li><a href={url}>{r.name}</a>: {r.rank}</li>
      )
    });

    return (
      <ul>
        {items}
      </ul>
    );
  }
}

export default List;
