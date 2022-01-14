import React from "react"
import { Weather } from "./Components/Weather";
import {WeatherProvider} from "./Context/WeatherContext";

function App() {
  return (
    <>
    <WeatherProvider>
      <Weather/>
    </WeatherProvider>
    </>
    
  );
}

export default App;
