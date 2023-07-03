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
  const calculate = () =>{
    if(!height==0){
    setbmi(weight/(height*height));
  }
  };
  return (
    <div>
        <input type="number" onChange={heightChange} />m
      <br/>
        <input type="number" onChange={weightChange} />kg
      <br/>
        <button onClick={calculate} >Calculate</button>
      <br/>
      Result is -- 
        {bmi}
    </div>
  )
}