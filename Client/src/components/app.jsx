import Board from './board.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: "RED",
      winner: '',
      columns: {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [] 
      }
    };
    this.updateColumns = this.updateColumns.bind(this);
  }
  updateColumns (event) {
    const target = event.target;
    const number = event.target.attributes.x.value;
    if (this.state.columns[number].length < 6) {
      let temp = this.state.columns[number].slice();
      temp.push(this.state.currentPlayer);
      let copy = this.state.columns;
      copy[number] = temp;
      this.setState({
        columns: copy
      })
    this.changePlayer();
    }
    this.checkColumns();
    this.checkRows();
  }
  checkColumns() {
    for (let num in this.state.columns) {
      const tempCol = this.state.columns[num]
      for (let i = 0; i < tempCol.length; i++) {
        if (tempCol[i] === "RED" && tempCol[i+1] === "RED" && tempCol[i+2] === "RED" && tempCol[i+3] === "RED") {
          this.setState({
            winner: "RED"
          })
          alert("RED WINS!");
        } else if (tempCol[i] === "BLUE" && tempCol[i+1] === "BLUE" && tempCol[i+2] === "BLUE" && tempCol[i+3] === "BLUE") {
          this.setState({
            winner: "BLUE"
          })
          alert("BLUE WINS!");
        }
      }
    }
  }

  checkRows () {
    for (let num in this.state.columns) {
      for (let i = 0; i < this.state.columns[num].length; i++) {
        if (this.state.columns[num].length-1) {
          break;
        }
        if (this.state.columns[num][i] === "RED" && this.state.columns[num+1][i] === "RED" && this.state.columns[num+2][i] === "RED" && this.state.columns[num+3][i] === "RED") {
          this.setState({
            winner: "RED"
          })
          alert("RED WINS!")
        } else if (this.state.columns[num][i] === "BLUE" && this.state.columns[num+1][i] === "BLUE" && this.state.columns[num+2][i] === "BLUE" && this.state.columns[num+3][i] === "BLUE") {
          this.setState({
            winner: "BLUE"
          })
          alert("BLUE WINS!") 
        }
      }
    }
  }

  checkDiagonals () {

  }

  checkTies () {
    if (!this.checkColumns() || !checkRows() || !checkDiagonals) {
      return true;
    } else {
      return false;
    }
  }
  changePlayer () {

    if (this.state.currentPlayer === "RED") {
      this.setState({
        currentPlayer: "BLUE"
      })
    } else {
      this.setState({
        currentPlayer: "RED"
      })
    }
  }
  render () {
    return (
      <div id="board">
        <Board updateColumns={this.updateColumns} columns={this.state.columns}/>
      </div>
    )
  }
}

export default App