import Column from './column.jsx'

function Board ({handler}) {
  return (
    <div>
      <Column handler={handler} x={0}/>
      <Column handler={handler} x={1}/>
      <Column handler={handler} x={2}/>
      <Column handler={handler} x={3}/>
      <Column handler={handler} x={4}/>
      <Column handler={handler} x={5}/>
      <Column handler={handler} x={6}/>
    </div>
  )
}

export default Board