import React, { useState } from "react";
import { filterPlayers } from "../../helpers";
import Logo from "../Logo";
import Button from "../Button";

const TeamFilter = () => {
  const [value, setValue] = useState([]);
  const [players, setPlayers] = useState([]);
  const [newplayer, setNewPlayer] = useState("");

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

  const addPlayer = () => {
    setPlayers(filterPlayers([...players, newplayer]));
  };

  const handlePlayers = (value) => {
    setValue(value);
    const separatedByLineAndComma = filterPlayers(value)
      .replace(/\n/g, ",")
      .split(",").filter(item => item);
    setPlayers(separatedByLineAndComma);
  };

  const handlePaste = () => {
    navigator.clipboard.readText().then((clipText) => {
      handlePlayers(clipText);
    });
  };

  return (
    <div className="flex gap-4 flex-col items-center h-full bg-teammaker p-6">
      <Logo dark className="w-2/3 my-12 max-w-xs" />
      <div className="w-full relative">
        <textarea
          style={{ resize: "none" }}
          className="p-4 h-96 w-full"
          onChange={(e) => handlePlayers(e.target.value)}
          rows="15"
          value={value}
          placeholder={placeholder}
        />
        <Button onClick={() => handlePaste()} />
      </div>
      <div className="flex w-full items-center h-12 gap-2">
        <input
          type="text"
          className="h-full p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
          placeholder="Agregar jugador"
          onChange={(event) => setNewPlayer(event.target.value)}
          value={newplayer}
        />
        <button
          type="button"
          onClick={() => addPlayer()}
          className="h-full bg-white inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {players.length > 0 && (
        <div className="flex items-center mt-4">
          <p className="text-white text-6xl pr-2 mr-2 border-r border-white">
            {players.length}
          </p>
          <div className="flex flex-wrap text-white gap-2">
            {players.map((player, i) => (
              <Badge key={i} text={player} />
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-end w-full mt-auto">
        <button
          type="submit"
          className="ml-3 inline-flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
        >
          Crear equipos
        </button>
      </div>
    </div>
  );
};

const Badge = ({ text }) => {
  return (
    <span
      style={{ textTransform: "capitalize" }}
      className="inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700"
    >
      {text}
      <button
        type="button"
        className="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
      >
        <span className="sr-only">Remove small option</span>
        <svg
          className="h-2 w-2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 8 8"
        >
          <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
        </svg>
      </button>
    </span>
  );
};

export default TeamFilter;
