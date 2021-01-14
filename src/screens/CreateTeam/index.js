import React, { useState } from "react";
import { filterPlayers } from "../../helpers";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout";

const CreateTeam = () => {
  const [value, setValue] = useState([]);
  const [players, setPlayers] = useState([]);
  const [newplayer, setNewPlayer] = useState("");

  const today = `${new Date().getFullYear()}-${`${
    new Date().getMonth() + 1
  }`.padStart(2, 0)}-${`${new Date().getDate() + 1}`.padStart(
    2,
    0
  )}T${`${new Date().getHours()}`.padStart(
    2,
    0
  )}:${`${new Date().getMinutes()}`.padStart(2, 0)}`;

  const [match, setMatch] = useState({
    location: "",
    date: today,
  });

  const history = useHistory();

  const placeholder = `Jugador1\nJugador2\nJugador3\nJugador4\nJugador5....
  `;

  const addPlayer = () => {
    setPlayers(filterPlayers([...players, newplayer]));
  };

  const handlePlayers = (value) => {
    setValue(value);
    const separatedByLineAndComma = filterPlayers(value);
    setPlayers(separatedByLineAndComma);
  };

  const handlePaste = () => {
    navigator.clipboard.readText().then((clipText) => {
      handlePlayers(clipText);
    });
  };

  const CreateTeams = () => {
    history.push({
      pathname: "/list",
      state: { players, match },
    });
  };

  return (
    <Layout>
      <div className="flex flex-col p-5 gap-6 max-w-screen-xl mx-auto w-full">
        <div
          className="flex flex-col flex-auto w-full relative"
          style={{ maxHeight: "400px" }}
        >
          <textarea
            className="p-4 w-full flex-1 rounded-md resize-none"
            onChange={(e) => handlePlayers(e.target.value)}
            value={value}
            placeholder={placeholder}
          />
          <button
            onClick={() => handlePaste()}
            type="button"
            className="sm:ml-3 absolute bottom-5 right-2 inline-flex items-center p-3 rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-indigo-700 focus:outline-none"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </button>
        </div>
        <div className="flex w-full items-center gap-2 h-10">
          <input
            type="text"
            className="rounded-md h-full p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 "
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
        <p className="text-white font-sans ">Datos del partido</p>
        <div className="flex gap-5">
          <input
            type="text"
            className=" rounded-md h-full p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 "
            placeholder="Lugar"
            onChange={(event) =>
              setMatch({ ...match, location: event.target.value })
            }
            value={match.location}
          />
          <input
            type="datetime-local"
            className=" w-1/4 rounded-md h-full p-2 block shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 "
            placeholder="Fecha"
            onChange={(event) =>
              setMatch({ ...match, date: event.target.value })
            }
            min={today}
            value={match.date}
          />
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

        <div className="flex justify-center w-full">
          <button
            disabled={players.length > 1 ? false : true}
            type="submit"
            onClick={() => CreateTeams()}
            className="disabled:opacity-50 ml-3 inline-flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
          >
            Crear equipos
          </button>
        </div>
      </div>
    </Layout>
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

export default CreateTeam;
