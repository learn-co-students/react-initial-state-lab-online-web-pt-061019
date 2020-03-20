import React, { Component } from 'react';

export default class Bomb extends Component {
    //solution has React.Component not just Component
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render(){
        if(this.state.secondsLeft === 0){
            return "Boom!"
        }
        else{
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }
}

// solution has below for render
// render() {
//     const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

//     return (
//       <div>{message}</div>
//     )
//   }