import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleClick() {
    setIsEditing((prevState) => !prevState);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  return (
    <>
      <li>
        <span className="player">
          {isEditing ? (
            <input
              type="text"
              required
              value={playerName}
              onChange={handleChange}
            />
          ) : (
            <span className="player-name">{playerName}</span>
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}