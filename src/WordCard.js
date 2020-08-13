import React, { Component } from 'react';
import CharacterCard from "./CharacterCard";
import _ from 'lodash';

const word = ['star' , 'glad' , 'hello' , 'studio' , 'ability' , 'computer', 'water', 'prince', 'shadow' ]; 

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))    
    return { 
         word, 
         chars, 
         attempt: 1, 
         guess: [], 
         completed: false 
    } 
}

export default class WordCard extends Component {
    constructor(props){
        
        super(props)
        var random = Math.floor(Math.random() * word.length);
        this.state = prepareStateFromWord(word[random])
    }
    activationHandler = (c) =>{
        let guess = [...this.state.guess, c.toUpperCase()]
        if(guess.length == 1){
            document.getElementById('your-answer').innerHTML = `Your Answer : ${c.toUpperCase()}` 
        }else
            document.getElementById('your-answer').innerHTML += c.toUpperCase();
        this.setState({guess})

        if(guess.length == this.state.chars.length){
            
            console.log('Correct Word: '+this.state.word)
            if(guess.join('').toString() == this.state.word){
                this.setState({guess: [], complete: true})
                document.getElementById('result').innerHTML = `Congratulations!`
                document.getElementById('newgame').style.display = "inline-block";
                                
            }else{
                document.getElementById('result').innerHTML = `ํYOU DIE!`
                console.log('Mistake Word: '+guess.join('').toString())
            }

        }
    }
    render() {
        if(this.props.isSurrenderConfirm){
            this.props.getAnswer(this.state.chars.join(' -> '))
        }
        return (
            <div>
                { Array.from(this.state.chars.join('').toString()).map((c, i) =><CharacterCard value={c} key={i} activationHandler={this.activationHandler}/>) }
            </div>
        );
    }
}

