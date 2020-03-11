// your Bomb code here!
// your ImageSlider code here!
// your ImageSlider code here!
import React, {Component} from 'react'


export default class Bomb extends Component {
  constructor(props){
    super(props)
    this.state = {
      secondsLeft : this.props.initialCount
    }
  }

  render() {
    const secLeft = this.state.secondsLeft
    let text
    if (secLeft == 0){
      text = 'Boom!'
    }
    else {
      text = secLeft + ' seconds left before I go boom!'
    }
    return (
      <div className='Bomb'>
        {text}
      </div>
    )
  }
}