import React from "react";

const GameBoard = ({onSelectSquare,turns}) => {
  
  return (
    <ol id="game-board">
      {turns.map((row, IndexRow) => (
        <li key={IndexRow}>
          <ol>
            {row.map((playerSymbol, IndexCol) => (
              <li key={IndexCol}>
                <button disabled={playerSymbol!==null} onClick={()=> onSelectSquare(IndexRow,IndexCol) }>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
