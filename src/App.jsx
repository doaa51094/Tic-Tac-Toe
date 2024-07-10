import React, { useState } from "react";
import { Player } from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
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
        <GameBoard onSelectSquare={handleSelectSquare} turns={GameTurns} />
      </div>
      <Log turns={GameTurns} />
    </main>
  );
};

export default App;
