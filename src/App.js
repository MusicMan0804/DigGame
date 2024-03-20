import "./styles.css";
import CellRow from "./CellRow";

export default function App() {
  let testGrid = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
  return (
    <div className="App">
      <CellRow values={testGrid[0]} />
      <br></br>
      <CellRow values={testGrid[1]} />
      <br></br>
      <CellRow values={testGrid[2]} />
      <br></br>
      <CellRow values={testGrid[3]} />
      <br></br>
      <CellRow values={testGrid[4]} />
      <br></br>
      <CellRow values={testGrid[5]} />
    </div>
  );
}
