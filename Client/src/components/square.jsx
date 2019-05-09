function Square ({handler, x, y}) {
  return (
    <div onClick={(e) => handler(e)}>
     <button className="square" x={x} y={y}></button>
    </div>
  )
}

export default Square