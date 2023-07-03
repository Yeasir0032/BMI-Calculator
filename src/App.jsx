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
    <main>
      <div className="App">
        <input type="number" onChange={heightChange} />m
        <input type="number" onChange={weightChange} />kg
        <button onClick={calculate} >Calculate</button>
        {bmi}
      </div>
    </main>
  )
}