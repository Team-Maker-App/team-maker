import React, { useState } from "react";
import { filterPlayers } from "../../helpers";

const TeamFilter = () => {
  const [value, setValue] = useState("");

  const placeholder = `Jugador1\nJugador2\nJugador3\nJugador4\nJugador5....
  `;

  return (
    <div className="flex flex-col h-full bg-purple-700 overflow-hidden p-6">
      <textarea
        className="p-4 my-12 h-80"
        onChange={(e) => setValue(e.target.value)}
        rows="15"
        placeholder={placeholder}
      />
      <ol>
        {filterPlayers(value).map((player, i) => (
          <li key={i} style={{ textTransform: "capitalize" }}>
            {player}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TeamFilter;
