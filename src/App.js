import { useState } from "react";
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

export function replaceCamelWithSpaces(colorName){
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App(){
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  
  return (
    <div style={{backgroundColor: 'black'}} >
      <button 
        style={{backgroundColor: disabled ? 'gray' : buttonColor}}
        onClick = {() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
      Change to {replaceCamelWithSpaces(newButtonColor)}
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