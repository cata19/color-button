import { useState } from "react";
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

function App(){
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  
  return (
    <div style={{backgroundColor: 'black'}} >
      <button 
        style={{backgroundColor: buttonColor}}
        onClick = {() => setButtonColor(newButtonColor)}
      >
      Change to {newButtonColor}
      </button>
      <input type='checkbox'/>
    </div>
  );
}

export default App;