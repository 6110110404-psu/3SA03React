import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";
function App() {
 return (
  <div>
    <h1>WORDCARD GAME</h1>
    <WordCard value={"hello"}/>
  </div>
 );
}

export default App;