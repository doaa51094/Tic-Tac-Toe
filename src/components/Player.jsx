import React, { useState } from "react";

export const Player = ({ name, symbol }) => {
  const [isEditting, setIsEditting] = useState(false);
  function handleEditClick() {
    setIsEditting((editing)=> !editing )  //true
  }
  return (
    <li>
      <span className="player">
        {!isEditting ? (
          <span className="player-name">{name}</span>
        ) : (
          <input type="text" required value={name} />
        )}
        <span className="player-symbol">{symbol}</span>{" "}
      </span>
      <button onClick={handleEditClick}>{isEditting?'Save':'Edit'}</button>
    </li>
  );
};
