import Board from './board.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: Array(7).fill(Array(6).fill(null)),
      rows: Array(6).fill(Array(7).fill(null))
    };
    this.handler = this.handler.bind(this);
  }
  handler (event) {
    console.log(this.state)
  }
  render () {
    return (
      <div id="board">
        <Board handler={this.handler}/>
      </div>
    )
  }
}

export default App