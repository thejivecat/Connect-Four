import Column from './column.jsx'

function Board ({updateColumns, columns}) {
  return (
    <div>
      <Column updateColumns={updateColumns} columns={columns[0]} x={0}/>
      <Column updateColumns={updateColumns} columns={columns[1]} x={1}/>
      <Column updateColumns={updateColumns} columns={columns[2]} x={2}/>
      <Column updateColumns={updateColumns} columns={columns[3]} x={3}/>
      <Column updateColumns={updateColumns} columns={columns[4]} x={4}/>
      <Column updateColumns={updateColumns} columns={columns[5]} x={5}/>
      <Column updateColumns={updateColumns} columns={columns[6]} x={6}/>
    </div>
  )
}

export default Board