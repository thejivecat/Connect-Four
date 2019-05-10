import Square from './square.jsx'

function Column ({updateColumns, x, columns}) {
  return (
    <div className="column">
    <Square y={5} updateColumns={updateColumns} color={columns[5]} x={x}></Square>
    <Square y={4} updateColumns={updateColumns} color={columns[4]} x={x}></Square>
    <Square y={3} updateColumns={updateColumns} color={columns[3]} x={x}></Square>
    <Square y={2} updateColumns={updateColumns} color={columns[2]} x={x}></Square>
    <Square y={1} updateColumns={updateColumns} color={columns[1]} x={x}></Square>
    <Square y={0} updateColumns={updateColumns} color={columns[0]} x={x}></Square>
 
    </div>
  )
}

export default Column