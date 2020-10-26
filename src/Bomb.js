import React from 'react';

class Bomb extends React.Component {

  constructor(props) {
    super() 
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
      if(this.state.secondsLeft === 0 ){
          let message = "Boom!"
          return(<div>{message}</div>)
        }else if(this.state.secondsLeft > 0 ){
            let message = `${this.state.secondsLeft} seconds left before I go boom!`;
            return(<div>{message}</div>)
        }
    }
}

export default Bomb;
