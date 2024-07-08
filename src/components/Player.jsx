import React from "react";

export const Player = ({ name, symbol }) => {
  const [isEditting, setIsEditting] = useState(false);
  return (
    <li>
      <span className="player">
        {isEditting ? (
          <span className="player-name">{name}</span>
        ) : (
          <input type="text" />
        )}
        <span className="player-symbol">{symbol}</span>{" "}
      </span>
      <button>Edit</button>
    </li>
  );
};
