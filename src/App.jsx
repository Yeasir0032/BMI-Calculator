import './App.css'
import {useState} from "react";
//import {BmiIntro} from './Components/accor'

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
      
      <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Height</span>
  <input type="number" onChange={heightChange} />
        <span className="input-group-text">cm</span>
</div>
      <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">Weight</span>
  <input type="number" onChange={weightChange} />
        <span className="input-group-text">Kg</span>
</div>
      <br/>
        <button className="btn btn-primary" onClick={calculate} >Calculate</button>
      <br/>
      <h4>
      BMI = 
        {bmi} kg/m2
      </h4>
      <br/>
      
      <p>The Body Mass Index (BMI) Calculator can be used to calculate BMI value and corresponding weight. </p>
      <h3>Healthy BMI Range</h3>
      <div>18.5 kg/m2 - 25 kg/m2</div>

    </div>
  )
}