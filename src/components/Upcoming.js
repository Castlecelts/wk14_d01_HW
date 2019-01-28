import React, { Component } from 'react';

class Upcoming extends Component{
  render(){
    return (
      <>
      <p><a id="upcoming" href={this.props.url}>{this.props.name}</a></p>
      </>
    )
  }
}

export default Upcoming;
