// Code EyesOnMe Component Here

import React from 'react';

export default class EyesOnMe extends React.Component {

  startingFocus = () => { console.log('Good!')}

  startingBlur = () => { console.log('Hey! Eyes on me!')}



  render(){
    return (
      <button onFocus={this.startingFocus} onBlur={this.startingBlur}> </button>

    )
  }
}
