// your Bomb code here!
import React from "react";


class Bomb extends React.Component {

    state = {
        secondsLeft: this.props.initialCount
    }

    
    render() {
        let showOnScreen = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!` 
        return (
            <div>
                <h2>{showOnScreen}</h2>
            </div>
        )
    }
}

export default Bomb

