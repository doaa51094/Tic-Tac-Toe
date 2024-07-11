import React, { useState } from "react";
import { Player } from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from './components/WINNING_COMBINATIONS.jsx'
import GameOver from "./components/GameOver.jsx";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  console.log(gameTurns);
  return currentPlayer;
}
const App = () => {
  const [GameTurns, setGameTurns] = useState([]);
  const ActivePlayer = deriveActivePlayer(GameTurns);
  let gameBoard = initialGameBoard;
  let winner;
  for (const turn of GameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
    console.log(gameBoard, row, col, player);
  }
  for (const combination of WINNING_COMBINATIONS) {
  const firstSquareSymbol=gameBoard[combination[0].row][combination[0].column]
  const secondSquareSymbol=gameBoard[combination[1].row][combination[1].column]
  const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column]
  console.log({firstSquareSymbol},{secondSquareSymbol},{thirdSquareSymbol});
  if (firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol) {
 winner=firstSquareSymbol;
  }
  }
  let draw=GameTurns.length=== 9 && !winner
  function handleSelectSquare(IndexRow, IndexCol) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updateTurns = [
        { square: { row: IndexRow, col: IndexCol }, player: currentPlayer },
        ...prevTurns,
      ];
      return updateTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={ActivePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={ActivePlayer === "O"} />
        </ol>
        {(winner || draw) && <GameOver winner={winner} />}
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameBoard} />
      </div>
      <Log turns={GameTurns} />
    </main>
  );
};

export default App;
