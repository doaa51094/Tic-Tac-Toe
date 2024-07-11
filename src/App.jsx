import React, { useState } from "react";
import { Player } from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./components/WINNING_COMBINATIONS.jsx";
import GameOver from "./components/GameOver.jsx";
let PLAYERS = { X: "player 1", O: "player 2" };
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
function deriveWinner(gameBoard, players) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    console.log(
      { firstSquareSymbol },
      { secondSquareSymbol },
      { thirdSquareSymbol }
    );
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}
function deriveGameBoard(GameTurns) {
  let gameBoard = [...initialGameBoard.map((arr) => [...arr])];
  for (const turn of GameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}
const App = () => {
  const [players, setPlayers] = useState(PLAYERS);
  const [GameTurns, setGameTurns] = useState([]);
  const ActivePlayer = deriveActivePlayer(GameTurns);
  const gameBoard = deriveGameBoard(GameTurns);

  let draw = GameTurns.length === 9 && !winner;
  const winner = deriveWinner(gameBoard, players);
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
  function handleReStart() {
    setGameTurns([]);
  }
  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayer) => {
      return {
        ...prevPlayer,
        [symbol]: newName,
      };
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={PLAYERS.X}
            symbol="X"
            isActive={ActivePlayer === "X"}
            onNameChange={handlePlayerNameChange}
          />
          <Player
            name={PLAYERS.O}
            symbol="O"
            isActive={ActivePlayer === "O"}
            onNameChange={handlePlayerNameChange}
          />
        </ol>
        {(winner || draw) && (
          <GameOver winner={winner} onReStart={handleReStart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameBoard} />
      </div>
      <Log turns={GameTurns} />
    </main>
  );
};

export default App;
