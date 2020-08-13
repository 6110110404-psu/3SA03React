/*import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";
function App() {
  /*var i;
  var text = ["hello", "world", "react", "stack", "start"];
  for(i = 0; i < 5; i++){
    text[i];
  }
 return (
  <div>
    <h1>WORDCARD GAME</h1>
    <WordCard value={"hello"}/>
  </div>
 );
}



export default App;*/

import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';
//import Reset from './Reset';

// const word = "Hello";
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

  /*getReset = (Reset) => {
    if(Reset){
      this.setState({ResetConfirm:true});
    }
  }*/

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

//กดรีเซ็ตไม่ได้
