// your Bomb code here!
// your ImageSlider code here!
import React, {Component} from 'react';

export default class Bomb extends Component{

    constructor(props) {
        super ()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        return (
            <div>
                {/* <h1> {this.state.secondsLeft} seconds left before I go boom! </h1> */}
                {this.state.secondsLeft == 0 ? <h1> Boom! </h1> : <h1> {this.state.secondsLeft} seconds left before I go boom! </h1>}
            </div>
        )
    }
}