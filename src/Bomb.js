import React from 'react';
import ReactDOM from 'react-dom';

class Bomb extends React.Component{
 constructor(props){
   super()
   this.state = {
     secondsLeft: props.initialCount
   }
 }

 render(){
   let seconds = (sec) => {
    if(sec !== 0){
      return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
    }else{
      return <div>Boom!</div>
    }
   }
   return seconds(this.state.secondsLeft)
 }
}

export default Bomb;
