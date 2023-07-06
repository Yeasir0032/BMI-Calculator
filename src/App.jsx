import './App.css'
import {useState} from "react";

export default function App() {
  const [height,setHeight] = useState(0.0);
  const [weight,setWeight] = useState(0.0);
  const [bmi,setbmi] = useState(0.0);
  const heightChange = (event) =>{
    setHeight(event.target.value);
  };
  const weightChange = (event) =>{
    setWeight(event.target.value);
  };
  var isvis = false;
  const calculate = () =>{
    if(!height==0){
    setbmi(weight*10000/(height*height));
  }
  };
  return (
    <div>
      <h1>BMI Calculator</h1><br/>
      
      <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Height</span>
  <input type="number" onChange={heightChange} />
        <span class="input-group-text">cm</span>
</div>
      <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Weight</span>
  <input type="number" onChange={weightChange} />
        <span class="input-group-text">Kg</span>
</div>
      <br/>
        <button class="btn btn-primary" onClick={calculate} >Calculate</button>
      <br/>
      <h4>
      Result is ->
        {bmi}
      </h4>
    </div>
  )
}