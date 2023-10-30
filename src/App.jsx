
import './App.css';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';


function App() {
  const [amout ,setAmout]=useState(0)
  const [discount,setDiscount]=useState(0)
  const [price ,setPrice]=useState(0)

  const calculate=(e)=>{
    const output=amout-(amout*discount/100)
  console.log(output);
  setPrice(output)
  }

  const reset=(e)=>{
    setAmout(0)
    setDiscount(0)
    setPrice(0)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1>DISCOUNT CALCULATOR</h1>
          <h3>Calculate Your Discount Offers </h3>
        </div>

        <div className="total">
          <h3>Discounted Amount:&#8377; {price} </h3>
        </div>

<form>
          <div className="input">
            <TextField  className="in" onChange={(e)=>setAmout(e.target.value)}  value={amout||""}  label="Original Amount"  variant="outlined" />
            <TextField  className="in" onChange={(e)=>setDiscount(e.target.value)} value={discount||""} label="Discount" variant="outlined" />
            </div>
  
  
</form>         
 <div className="buton">
          <Button  id='b1' onClick={calculate} variant="contained">Calculate</Button>
          <Button id='b2' onClick={reset} variant="contained">Reset</Button>

          </div>
      </div>
    </div>
  );
}

export default App;
