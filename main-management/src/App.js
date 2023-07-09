import './App.css';
import React from 'react';
import Headering from './Components/DisplayHeader.js';

const  NameOfme = 'Tchasinga'
function App() {
  return (
    <div className="App">
        <h1>{NameOfme}</h1>
        <Headering/>
    </div>
  );  
}

export default App;