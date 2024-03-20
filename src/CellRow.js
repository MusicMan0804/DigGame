import Cell from "./Cell";

function CellRow(props) {
  return (
    <div className="Row">
      <Cell value={props.values[0]} />
      <Cell value={props.values[1]} />
      <Cell value={props.values[2]} />
      <Cell value={props.values[3]} />
      <Cell value={props.values[4]} />
      <Cell value={props.values[5]} />
    </div>
  );
}

export default CellRow;
