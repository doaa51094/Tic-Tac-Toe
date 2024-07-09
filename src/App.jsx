import React, { useState } from "react";
import { Player } from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
const App = () => {
  const [ActivePlayer, setActivePlayer] = useState("X");
  const [GameTurns, setGameTurns] = useState([]);
  function handleSelectSquare(IndexRow, IndexCol) {
    setActivePlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
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
        <Log turns={GameTurns}/>
    </main>
  );
};

export default App;
