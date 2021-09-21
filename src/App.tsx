import './App.css';
import { ChangeEvent, MouseEvent, useState } from 'react'

function App() {

  const[number, setNumber] = useState('')


  const handlePrimeFinder = (e: MouseEvent , num: number) => {
    e.preventDefault()
    let int = Number(num)
    
    for (let i = int; i > 0 ; i-- ) {
      console.log(100 - int)
    }
    
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setNumber(e.target.value)
  }

  return (
    <div className="App container">
      <div className="header">Find the Prime</div>
      <form className="input">
        <label>nth Prime #</label>
        <input 
          type="number" 
          name="num"
          value={number}
          onChange={handleInputChange}
        /> 
        <div>1-100</div>
      <button onClick={(e) => handlePrimeFinder(e, Number(number))}>
        Pick a Number
      </button>
      </form>
    </div>
  );
}

export default App;
