// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    return this.state.secondsLeft === 0 ? <h3>Boom!</h3> : <h3>{this.state.secondsLeft} seconds left before I go boom!</h3>
  }

}

export default Bomb