import React, { PropTypes } from 'react'

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render () {
    return (
      <section className="detail">
        <header>Detail</header>

        <section className="content">
          Some content here.

          {this.props.children}
        </section>
      </section>
    )
  }
}

export default Detail;
