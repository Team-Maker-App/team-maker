import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import { ReactComponent as Versus } from "../../versus.svg";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { convertTimestampToDate } from "helpers";

// Services
import { generateShareImage } from "./generateShareImage";
import { getMatchById } from "services/firestore";

// Components
import Button from "components/Button";
import Layout from "components/Layout";
import ShareIcon from "components/Icons/ShareIcon";
import Feedback from "components/Feedback/Feedback";
import PlayersList from "./PlayersList";
import LoadingIcon from "components/Icons/LoadingIcon";

const Match = () => {
  const { id } = useParams();
  const content = useRef();
  const [match, setMatch] = useState();

  const half = Math.ceil(match?.players?.length / 2);

  const firstHalf = match?.players?.slice(0, half);
  const secondHalf = match?.players?.slice(-half);

  useEffect(() => {
    getMatchById(id).then((match) => {
      setMatch(match);
    });
  }, [id]);

  const handleShare = () => {
    generateShareImage(content.current);
  };

  return (
    <Layout>
      {match ? (
        <div className="flex flex-col">
          <div className="screenshot flex flex-col gap-5 p-4" ref={content}>
            <div className="col-span-1 flex shadow-sm rounded-md w-full mx-auto">
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
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <div className="flex-1 px-4 py-2 text-sm truncate">
                  <p className="text-gray-900 font-medium hover:text-gray-600">{match?.location}</p>
                  <p className="text-gray-500 capitalize">
                    {format(convertTimestampToDate(match?.date), "EEEE dd/MM - p", { locale: es })} hs{" "}
                  </p>
                  <p className="text-gray-500">
                    {match?.players?.length} / {match?.max_players} Jugadores
                  </p>
                </div>
              </div>
            </div>

            <div style={{ minHeight: "100px" }} className="relative flex justify-center mb-5 text-center gap-3">
              <PlayersList players={firstHalf} color="#FFFFFF" />
              <div className="z-10 absolute bottom-3">
                <Versus width={45} height={45} />
              </div>
              <PlayersList players={secondHalf} color="#2C3590" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Button onClick={handleShare} disabled={!match}>
              <div className="flex gap-4 w-full justify-center items-center px-6">
                <span>Compartir</span>
                <ShareIcon className="w-4 h-4" />
              </div>
            </Button>
          </div>
        </div>
      ) : (
        <LoadingIcon />
      )}
      <div className="w-full text-center p-4 pin-b">
        <Feedback />
      </div>
    </Layout>
  );
};

export default Match;
