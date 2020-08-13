import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

class App extends Component {

  constructor() {
    super()
    this.state = {
      //ResetConfirm: false,
    };
    
  }

  newgame = () => {
    window.location.reload(false);
  }

  getAnswer = (answer) => {
    document.getElementById('result').innerHTML = `Answer : ${answer}`;
  }

  render() {
    return (
      <div className="App">
        <h1 id="welcome">WordCard & CardGame with React!</h1>
       
        <div id="main">
            <h2 id="your-answer"></h2>
            <h1 id="result"></h1>
            

              <WordCard />
                          
        </div>
        <button id= "newgame" className="button" onClick={this.newgame}>NEW GAME</button>
        
      </div>
    );
  }
}
export default App;
