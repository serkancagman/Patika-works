import React from "react";
import { send } from "../SocketApi/SocketApi";

export const Color = ({bgColor}) => {
  const [color, setColor] = React.useState("#000");

  const colorHandler = (e) => {
    setColor(e.target.value);
  };
  return (
    <section style={{ width: "100%", height: "100vh"}} className="colorMain">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          alignItems: "center"
        }}
        className="colorArea"
      >
        <input
          type="color"
          value={bgColor}
          onChange={(e) => colorHandler(e)}
          id=""
        />
        <br />
        <p>{bgColor}</p>
        <button onClick={() =>send(color)} >Send Data</button>
      </div>
    </section>
  );
};
