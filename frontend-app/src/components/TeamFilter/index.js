import React, { useState } from "react";
import { filterPlayers } from "../../helpers";
import Logo from "../Logo";

const TeamFilter = () => {
  const [value, setValue] = useState("");

  const placeholder = `Jugador1\nJugador2\nJugador3\nJugador4\nJugador5....
  `;

  /* Lista de prueba
  1. Pablo
  2 lele
  3 pleis
  4 oveja
  5 gonzalo
  6 Damián
  7 Herni
  8 Burro rebotes
  9 German sin pulmones
  10 Ale
  11 Sera al final se muda en Enero
  12 mono
*/

  return (
    <div className="flex flex-col items-center h-full bg-purple-700 overflow-hidden p-6">
      <Logo dark className="w-2/3 my-12" />
      <textarea
        className="p-4 h-80 w-full"
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
