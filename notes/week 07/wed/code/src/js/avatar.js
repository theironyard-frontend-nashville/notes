import React from 'react'

class Avatar extends React.Component {
  render () {
    return (
      <img src={this.props.src} className="avatar" height={this.props.height}/>  
    )
  }
}

export default Avatar;
