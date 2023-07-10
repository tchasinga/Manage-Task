import './App.css';
import React from 'react';
import Headering from './Components/DisplayHeader.js';
import InsertInputForms from './Components/FormikInput.js';

const  NameOfme = 'Tchasinga'
function App() {
  return (
    <div className="App">
        <h1>{NameOfme}</h1>
        <Headering/>
        <InsertInputForms/>
    </div>
  );  
}

export default App;