import { useState } from "react";
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

function App(){
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  
  return (
    <div style={{backgroundColor: 'black'}} >
      <button 
        style={{backgroundColor: buttonColor}}
        onClick = {() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
      Change to {newButtonColor}
      </button>
      <br />
      <input 
        type='checkbox'
        id='disable-button-checkbox'
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}/>
        <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}
//comment from home
export default App;