import logo from "./logo.svg";
import "./App.css";
import { LoginOrRegister } from "./Components/LoginandRegister/LoginOrRegister";
import React, { useEffect } from "react";

function App() {

  const[number,setNumber] = React.useState(0)

  useEffect(()=>{
    console.log("state değişti")
  },[number])

  return (
    <>
      
      <div>{number}</div>
      <button onClick={()=> setNumber(number + 1)} >
        Increase
      </button>
    </>
  );
}

export default App;
