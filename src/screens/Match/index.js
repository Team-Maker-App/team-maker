import React, { useEffect, useState } from "react";
import { subscribeMatchByID } from "../../helpers/firebase";
import userStore from "../../store/userStore";
import modalStore from "../../store/modalStore";

import { format } from "date-fns";
import { es } from "date-fns/esm/locale";

//Components
import Layout from "../../components/Layout";
import Feedback from "../../components/Feedback/Feedback";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import MatchForm from "./MatchForm";

const Match = ({ match }) => {
  const [data, setData] = useState({});

  const { username } = userStore();
  const { setContent, openModal, closeModal } = modalStore();

  const [hover, setHover] = useState(null);

  const [loading, setLoading] = useState(true);
  const { location, creator, max_players, players, date } = data;

  // Validations
  const isAdmin = username === creator;

  useEffect(() => {
    subscribeMatchByID(match.params.id).then((match) => {
      setData(match);
      setLoading(false);
    });
  }, []);

  const handleDelete = (selectedUser) => {
    openModal();
    setContent(() => (
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <svg
            className="h-6 w-6 text-red-600"
            x-description="Heroicon name: outline/exclamation"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            ></path>
          </svg>
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
            Eliminar un jugador de la lista
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              ¿Seguro que quiere eliminar a un jugador de la lista? El jugador deberá recibir una nueva invitación para
              poder unirse nuevamente.
            </p>
          </div>
        </div>
        <div className="mt-6 text-right sm:px-6">
          <button
            onClick={() => deleteUser(selectedUser)}
            className="bg-red-600 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Eliminar
          </button>
        </div>
      </div>
    ));
  };

  const handleEdit = () => {
    openModal();
    setContent(MatchForm);
  };

  const deleteUser = (selectedPlayer) => {
    // dbMatch.update({
    //   players: [...players.filter((player) => player !== selectedPlayer)],
    // });
    closeModal();
  };

  return (
    <Layout>
      <div className="flex flex-col p-5 gap-1 max-w-screen-xl mx-auto w-full text-white font-sans">
        {loading && <p>Loading...</p>}
        {!loading && (
          <div className="flex flex-col">
            <div className="screenshot flex flex-col gap-5 p-4 pt-10 pb-16">
              <div className="relative col-span-1 flex shadow-sm rounded-md w-full mx-auto">
                {isAdmin && (
                  <button
                    type="button"
                    onClick={handleEdit}
                    className="absolute top-2 right-2  inline-flex items-center p-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    <MdEdit className="h-5 w-5 text-cyan-800" />
                  </button>
                )}
                <div className="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md">
                  <svg
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md">
                  <div className="flex-1 px-4 py-2 text-sm">
                    <p className="text-gray-500">
                      Ubicación: <span className="text-primary">{location}</span>
                    </p>
                    <p className="text-gray-500 capitalize flex gap-1">
                      Fecha:
                      <span className="text-primary">
                        {format(date.toDate(), "EEEE dd/MM - p", {
                          locale: es,
                        })}{" "}
                        hs.
                      </span>
                    </p>
                    <p className="text-gray-500">
                      Jugadores: <span className="text-primary">{`${players.length} / ${max_players}`}</span>
                    </p>
                    <p className="text-gray-500">
                      Creado por <span className="text-primary">{creator}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow overflow-hidden rounded-md">
                <ul className="divide-y divide-gray-200 text-primary">
                  {players
                    ?.filter((_, i) => i < max_players)
                    .map((player, i) => (
                      <li
                        key={player}
                        onMouseEnter={() => setHover(i)}
                        onMouseLeave={() => setHover(null)}
                        className="flex justify-between items-center h-10"
                      >
                        <span className="pl-6">{`${i + 1}. ${player}`}</span>
                        {isAdmin && hover === i && (
                          <button
                            onClick={() => handleDelete(player)}
                            className="flex justify-center items-center h-full w-12 bg-red-200"
                          >
                            <FaTrashAlt className="text-red-800" />
                          </button>
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-full text-center p-4 pin-b">
        <Feedback />
      </div>
    </Layout>
  );
};

export default Match;
