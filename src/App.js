import './App.css';
import React, {useState} from 'react';

function App() {
  let [num1, setNum1] = useState(''); 
  let [num2, setNum2] = useState(''); 
  let [output, setOutput] = useState('Output'); 


  const handleNum1 = (event) => {
    setNum1(event.target.value);
  }
  const handleNum2 = (event) => {
    setNum2(event.target.value);
  }

  function handleOps(ops){
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (ops === "+"){
      setOutput(num1+num2);
    }
    else if (ops === "-"){
      setOutput(num1-num2);
    }
    else if (ops === "*"){
      setOutput(num1*num2);
    }
    else {
      setOutput(num1/num2);
    }
  }
  
  return (
    <div className='App'>
      <div className="container">
        <div className='header'></div>
        <input type='number' placeholder='Type a number' onChange={handleNum1}></input>
        <input type='number' placeholder='Type a number' onChange={handleNum2}></input>

        <div className='ops'>
          <button className='button' onClick={() => handleOps("+")}>➕</button>
          <button className='button' onClick={() => handleOps("-")}>➖</button>
          <button className='button' onClick={() => handleOps("*")}>✖</button>
          <button className='button' onClick={() => handleOps("/")}>➗</button>
        </div>

        <div className='output'>
          {output}
        </div>
      </div>
    </div>
  );
}

export default App;
