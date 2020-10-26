import React from 'react';
import ReactDOM from 'react-dom';

class Imageslider extends React.Component{
  constructor(props){
    super()
    this.state = {currentSlideIndex: 0}
  }
  render(){
    return <div>I am on slide {this.state.currentSlideIndex}</div>
  }
}

export default Imageslider;
