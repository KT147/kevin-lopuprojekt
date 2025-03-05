import { useState, useEffect } from "react"
import './slidepuzzle.css'


function SlidePuzzle() {

    const initialBoard = [
        [1,2,3],
        [4,5,6],
        [7,8,0]
    ]

    const [board, setBoard] = useState(initialBoard)

    const shuffleBoard = () => {
        let flatBoard = board.flat() // teeb rea üheks massiiviks [1, 2, 3, 4, 5, 6, 7, 8, 0]
        flatBoard = flatBoard.filter(num => num !== 0) // eemaldab 0
        for (let i = flatBoard.length - 1; i > 0; i--) { // Fisher Yates algorütm
          const j = Math.floor(Math.random() * (i + 1));
          [flatBoard[i], flatBoard[j]] = [flatBoard[j], flatBoard[i]]
        }
        flatBoard.push(0) // 0 on alati lõpus
        const newBoard = [
          flatBoard.slice(0, 3),
          flatBoard.slice(3, 6),
          flatBoard.slice(6, 9)
        ] // paneb tagasi 3 kaupa
        return newBoard
      }
      
    useEffect(() => {
        const shuffledBoard = shuffleBoard()
        setBoard(shuffledBoard)
      }, [])

    const findEmptyTile = () => {
        for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 3; col++) {
            if (board[row][col] === 0) {
              return { row, col }
            }
          }
        }
      }

      const canMove = (row, col, emptyTile) => {
        const rowGap = Math.abs(row - emptyTile.row)
        const colGap = Math.abs(col - emptyTile.col)
        return (rowGap === 1 && colGap === 0) || (colGap === 1 && rowGap === 0)
      }

      const moveTile = (row, col) => {
        const emptyTile = findEmptyTile()
        if (canMove(row, col, emptyTile)) {
          const newBoard = board.map((r) => [...r])
          newBoard[emptyTile.row][emptyTile.col] = board[row][col]
          newBoard[row][col] = 0
          setBoard(newBoard)
        }
      }

  return (
    <div>
        <h1>Numbripusle</h1>
        <div className="board">
        {board.map((row, rowIndex) =>
        row.map((tile, colIndex) => (
            <div key={rowIndex + '-' + colIndex} className={"tile " + (tile === 0 ? "empty" : "")} onClick={() => moveTile(rowIndex,colIndex)}>
                {tile !== 0 ? tile : ""}
            </div>
            ))
        )}
        </div>
    </div>
  )
}

export default SlidePuzzle