import Square from './square.jsx'

function Column ({handler, x}) {
  return (
    <div className="column">
    <Square y={5} handler={handler} x={x}></Square>
    <Square y={4} handler={handler} x={x}></Square>
    <Square y={3} handler={handler} x={x}></Square>
    <Square y={2} handler={handler} x={x}></Square>
    <Square y={1} handler={handler} x={x}></Square>
    <Square y={0} handler={handler} x={x}></Square>
 
    </div>
  )
}

export default Column