/*
The initial state of Bomb should have a property called secondsLeft.

The initial value of secondsLeft should be equal to the initialCount prop of our Bomb component.

As an extra step for understanding, you can open in the index.js file to see how we are passing the initialCount prop to Bomb

It should render the text '<SECONDS_LEFT> seconds left before I go boom!', where <SECONDS_LEFT> is the value of secondsLeft.

If secondsLeft equals 0, it should render 'Boom!' instead.
*/

import React from 'react';

class Bomb extends React.Component {

    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render(){
        // if (this.state.secondsLeft === 0){
        //     let message = "Boom!"
        // } else {
        //     let message = `{this.state.secondsLeft} seconds left before I go boom!`
        // }
        
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!` 
        
        return (
            <div>{message}</div>
        )
    }
}

export default Bomb;