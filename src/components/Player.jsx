import React, { useState } from "react";

export const Player = ({ name, symbol }) => {
  const [isEditting, setIsEditting] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  function handleEditClick() {
    setIsEditting((editing)=> !editing )  //true
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li>
      <span className="player">
        {!isEditting ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input type="text" required value={playerName} onChange={handleChange}/>
        )}
        <span className="player-symbol">{symbol}</span>{" "}
      </span>
      <button onClick={handleEditClick}>{isEditting?'Save':'Edit'}</button>
    </li>
  );
};
