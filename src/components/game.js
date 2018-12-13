import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {

    constructor(props) {
        super(props)
    
    this.state = {
        what: false,
        newGame: false,
        responce: 'Make a Guess',
        // userGuess: '50',
        guessHistory: [],
        currentGuess: -1,
        randomNumber: Math.floor(Math.random()*101),
        guessCounter: 0

    }
    }
    
    //  generateRandomNumber() 
    // {
    //     const rando =;
    //     return rando;
    // } 

handelGuess (guess){


    if ( Math.abs(guess - this.state.randomNumber) <= 10 ){
        this.setState({responce: "HOT"})
        }  

    if ( Math.abs(guess - this.state.randomNumber) > 10 ){
    this.setState({responce: "COLD"})
        }

    if ((guess - this.state.randomNumber) === 0 ){
            this.setState({responce: "!!WINNER!!"})
                }


    this.setState({
        currentGuess: guess,
        guessHistory: [ ...this.state.guessHistory, guess],
        guessCounter: this.state.guessCounter + 1,
        

    })
}

handleNewGame() {
    this.setState({
        what: false,
        newGame: false,
        responce: 'Make a Guess',
        guessHistory: [],
        currentGuess: -1,
        randomNumber: Math.floor(Math.random()*101),
        guessCounter: 0
    })
}

  render() {
    return (
        <div>
            <Header  what={this.state.what}
             onClick={() => this.setState({what: true})}
             asdf={() => this.setState({what: false})}
            handleNewGame={() => this.handleNewGame()}/>

            <GuessSection
            handelGuess={guess => this.handelGuess(guess)} 
            feedback={this.state.responce} />

            <GuessCount count={this.state.guessCounter} />

            <GuessList guesses={this.state.guessHistory} />
        </div>
    );
    }
}

