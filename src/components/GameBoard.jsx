import React, { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = () => {
  const [GameBoard, setGameBoard] = useState(initialGameBoard);
  function handleSelectSquare(IndexRow,IndexCol) {
    setGameBoard((prevBoard)=> {
      const updateBoard=[...prevBoard.map((innerSquare)=>[...innerSquare])]
      updateBoard[IndexRow][IndexCol]='X'
      return updateBoard
    })
  }
  return (
    <ol id="game-board">
      {GameBoard.map((row, IndexRow) => (
        <li key={IndexRow}>
          <ol>
            {row.map((playerSymbol, IndexCol) => (
              <li key={IndexCol}>
                <button onClick={()=> handleSelectSquare(IndexRow,IndexCol)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
