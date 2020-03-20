import React, { Component } from 'react';

export default class ImageSlider extends Component {
    //solution has React.Component not just Component
    constructor(){
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }
    render(){
        return (`I am on slide ${this.state.currentSlideIndex}`)
    }
}


//solution has below for render
// render() {
//     return (
//         <h1>I am on slide {this.state.currentSlideIndex}</h1>
//       )
//     }