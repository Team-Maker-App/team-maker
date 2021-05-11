import React, { useEffect, useState } from "react";

import { db } from "../../helpers/firebase";

import { format } from "date-fns";
import { es } from "date-fns/esm/locale";

//Components
import Layout from "../../components/Layout";
import Feedback from "../../components/Feedback/Feedback";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const Match = ({ match }) => {
  const [data, setData] = useState({});
  const [visible, setVisible] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);
  const { location, admin, max_players, players, date } = data;
  const dbMatch = db.collection("matches").doc(match.params.id);

  useEffect(() => {
    const unsubscribe = dbMatch.onSnapshot((doc) => {
      setData(doc.data());
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = (selectedPlayer) => {
    dbMatch.update({
      players: [...players.filter((player) => player !== selectedPlayer)],
    });
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
                    class="absolute top-2 right-2  inline-flex items-center p-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                      Admin: <span className="text-primary">{admin}</span>
                    </p>
                    <p className="text-gray-500">
                      Jugadores: <span className="text-primary">{`${players.length} / ${max_players}`}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="bg-white shadow overflow-hidden rounded-md">
                <ul class="divide-y divide-gray-200 text-primary">
                  {players
                    ?.filter((_, i) => i < max_players)
                    .map((player, i) => (
                      <li
                        key={player}
                        onMouseEnter={() => setVisible(i)}
                        onMouseLeave={() => setVisible(null)}
                        class="flex justify-between items-center h-10"
                      >
                        <span className="pl-6">{`${i + 1}. ${player}`}</span>
                        {isAdmin && visible === i && (
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
