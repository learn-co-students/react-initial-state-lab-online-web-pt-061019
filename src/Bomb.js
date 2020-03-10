// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    if (this.state.secondsLeft !== 0) {
      return (
        <div id="bomb">
          {this.state.secondsLeft} seconds left before I go boom!
          </div>
        )
    } else {
      return (
        <div id="bomb">
           Boom!
        </div>
      )
    }
  }
}
