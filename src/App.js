import "./styles.css";
import CellRow from "./CellRow";
import React, { useState } from "react";

//grid state variables
export default function App() {
  //Row state variables
  let coverGrid = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
  let secondGrid = [
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ];

  let thirdGrid = [
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2],
  ];
  const [grid, setGrid] = useState(coverGrid);

  //dig functions
  function digColumn(num) {
    let tempGrid = grid.map((row) => [...row]);
    for (let i = 0; i < 6; i++) {
      tempGrid[i][num] = secondGrid[i][num];
    }
    setGrid(tempGrid);
  }

  function digRow(num) {
    let tempGrid = grid.map((row) => [...row]);
    switch (num) {
      case 0:
        tempGrid[0] = secondGrid[0];
        break;
      case 1:
        tempGrid[1] = secondGrid[1];
        break;
      case 2:
        tempGrid[2] = secondGrid[2];
        break;
      case 3:
        tempGrid[3] = secondGrid[3];
        break;
      case 4:
        tempGrid[4] = secondGrid[4];
        break;
      case 5:
        tempGrid[5] = secondGrid[5];
        break;
    }
    setGrid(tempGrid);
  }

  return (
    <div className="App">
      <CellRow values={grid[0]} />
      <br></br>
      <CellRow values={grid[1]} />
      <br></br>
      <CellRow values={grid[2]} />
      <br></br>
      <CellRow values={grid[3]} />
      <br></br>
      <CellRow values={grid[4]} />
      <br></br>
      <CellRow values={grid[5]} />
      <button onClick={() => digRow(0)}>Dig Row</button>
      <button onClick={() => digColumn(0)}>Dig Column</button>
    </div>
  );
}
