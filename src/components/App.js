import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [boxes, setBoxes] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBox = {
      width: width,
      height: height,
      backgroundColor: backgroundColor,
    };
    setBoxes([...boxes, newBox]);
    setWidth("");
    setHeight("");
    setBackgroundColor("");
  };
  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <h1>Box Creator</h1>
        <div>
          <label htmlFor="width">Width:</label>
          <input
            id="width"
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="height">Height:</label>
          <input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color:</label>
          <input
            id="backgroundColor"
            type="text"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>
        <button className="create-btn">Create Box</button>
      </form>
      <div id="box-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            style={{
              width: box.width + "px",
              height: box.height + "px",
              backgroundColor: box.backgroundColor,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default App;
