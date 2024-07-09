import React from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = ({onSelectSquare,turns}) => {
  let gameBoard=initialGameBoard;
  for (const turn of turns) {
    const {square,player}=turn;
    const {row,col}=square;
    gameBoard[row][col]=player;
    console.log(gameBoard,row,col,player);
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, IndexRow) => (
        <li key={IndexRow}>
          <ol>
            {row.map((playerSymbol, IndexCol) => (
              <li key={IndexCol}>
                <button onClick={()=> onSelectSquare(IndexRow,IndexCol) }>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
