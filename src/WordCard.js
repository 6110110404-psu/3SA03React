/*import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import _, { attempt } from 'lodash';

const prepareStateFromWord = (given_word) => {
   let word = given_word.toUpperCase()
   let chars = _.shuffle(Array.from(word))
   return {
      word,
      chars,
      attempt: 1,
      guess: '',
      completed: false
   }
  }


export default function WordCard(props){
    
   const [state, setState] = useState(prepareStateFromWord(props.value))

   const activationHandler = (c) => {
      console.log(`${c} has been activated.`)
   
      let guess = state.guess + c
      setState({...state, guess})
   
      if(guess.length == state.word.length){
         if(guess == state.word){
            console.log('yeah!')
            setState({...state,completed: true})
         }else{
            console.log('reset')
            setState({...state, guess: '', attempt: state.attempt + 1})
         }
      }
    
   }

    return (
        <div>
            {
                state.chars.map((c, i) => 
                <CharacterCard value={c} key={i} activationHandler = {activationHandler} attempt={state.attempt}/>)
            }
        </div>
    );
}*/

import React, { Component } from 'react';
import CharacterCard from "./CharacterCard";
import _ from 'lodash';

const word = ['star' , 'glad' , 'hello' , 'studio' , 'ability' , 'computer' ]; 

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
                //document.getElementById('end').style.display = "none";
                
            }else{
                document.getElementById('result').innerHTML = `ํYOU DIE!`
                console.log('Mistake Word: '+guess.join('').toString())
                /*this.setState({guess: [], attempt: this.state.attempt + 1})
                document.getElementById('result').innerHTML = `Attempt Or Try Again: ${this.state.attempt} `*/
            }
            /*if(this.state.attempt == 3){
                document.getElementById('result').innerHTML = `Game Over!`
                setTimeout(() => window.location.reload(false),3000)
            }*/
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

