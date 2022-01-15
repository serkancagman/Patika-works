import logo from "./logo.svg";
import "./App.css";
import { Color } from "./Components/Color";
import React from "react";
import { int, subscribe } from "./SocketApi/SocketApi";

function App() {
  const [activeColor, setActiveColor] = React.useState("#282c34");

  React.useEffect(() => {

    int();

    subscribe((color) => {
      setActiveColor(color);
    });
  }, []);

  return (
    <>
      <div style={{ backgroundColor: activeColor }}>
        <Color bgColor={activeColor} />
      </div>
    </>
  );
}

export default App;
