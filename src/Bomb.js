// your Bomb code here!
import React from "react";

class Bomb extends React.Component {
    state= {
        secondsLeft: this.props.initialCount
    }
    render(){
        if(this.props.initialCount > 0) {
            return this.state.secondsLeft === 0 ? <h3>BOOM!</h3> : <h3>{this.state.secondsLeft} seconds left before i go boom!</h3>
        }
        else {
            return "BOOM!"
        }
    }
}

export default Bomb