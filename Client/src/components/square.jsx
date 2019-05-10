function Square ({updateColumns, x, y, color}) {
  return (
    <div onClick={(e) => updateColumns(e)}>
     <button className="square" x={x} y={y} style={{'backgroundColor': color}}></button>
    </div>
  )
}

export default Square