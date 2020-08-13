import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";
function App() {
  var i;
  var text = ["hello", "world", "react", "stack", "start"];
  /*for(i = 0; i < 3; i++){
    text[i];
  }*/
 return (
  <div>
    <h1>WORDCARD GAME</h1>
    <WordCard value={"hello"}/>
  </div>
 );
}



export default App;

