import { useRef } from "react";
import "./styles.scss";
import { ReactComponent as Versus } from "../../versus.svg";
import { useParams, useHistory } from "react-router-dom";
import { convertTimestampToDate } from "helpers";

// Services
import { generateShareImage } from "./generateShareImage";
import useMatch from "hooks/useMatch";

// Components
import Button from "components/Button";
import Layout from "components/Layout";
import ShareIcon from "components/Icons/ShareIcon";
import Feedback from "components/Feedback/Feedback";
import PlayersList from "./PlayersList";
import LoadingIcon from "components/Icons/LoadingIcon";

const Match = () => {
  const { id } = useParams();
  const history = useHistory();
  const [match, exists] = useMatch(id);
  const content = useRef();

  const handleShare = () => {
    generateShareImage(content.current);
  };

  // Constants
  const totalPlayers = match?.teams.A?.length + match?.teams.B.length;

  return (
    <Layout>
      {match ? (
        <div className="match">
          <div className="match__content screenshot" ref={content}>
            <div className="match__header">
              <div className="match__header__icon">
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
              <div className="match__header__data">
                <p className="title">{match?.location}</p>
                <p className="text-gray-500 capitalize">{convertTimestampToDate(match?.date)}</p>
                <p className="text-gray-500">
                  creado por <span className="subtitle">{match?.admin}</span>
                </p>
                <p className="text-gray-500">
                  {totalPlayers} / {match?.max_players} Jugadores
                </p>
              </div>
            </div>

            <div style={{ minHeight: "100px" }} className="relative flex justify-center mb-5 text-center gap-3">
              <PlayersList players={match?.teams.A} color="#FFFFFF" />
              <div className="z-10 absolute bottom-3">
                <Versus width={45} height={45} />
              </div>
              <PlayersList players={match?.teams.B} color="#2C3590" />
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
      ) : exists === false ? (
        <div className="not-found">
          <p>No se encontro información...</p>
          <Button onClick={() => history.push("/create")}>Ir al inicio</Button>
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
