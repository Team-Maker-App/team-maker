import React, { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { ReactComponent as Versus } from "../../versus.svg";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";
import { es } from "date-fns/esm/locale";
import html2canvas from "html2canvas";
import { matchStore } from "../../store";
import { dataURLtoFile } from "../../helpers";

// Components
import Alert from "../../components/Alert/Alert";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout";
import ShareIcon from "../../components/Icons/ShareIcon";
import Logo from "../../components/Logo";
import Feedback from "../../components/Feedback/Feedback";
import PlayersList from "./PlayersList";
import { shuffle } from "lodash";
import { AnimateSharedLayout, motion } from "framer-motion";

const ListTeam = () => {
  const content = useRef();
  const history = useHistory();
  const { location, players, date } = matchStore();

  const [isCapturing, setIsCapturing] = useState(false);
  const [names, setNames] = useState(players);
  const [shuffling, setShuffling] = useState(true);

  const half = Math.ceil(players?.length / 2);

  const firstHalf = names?.slice(0, half);
  const secondHalf = names?.slice(-half);

  useEffect(() => {
    if (players.length === 0) {
      history.push("/create");
    }
  }, [history, players.length]);

  useEffect(() => {
    if (shuffling) setTimeout(() => setNames(shuffle(names)), 600);
  }, [names, shuffling]);

  useEffect(() => {
    setTimeout(() => setShuffling(false), 3600);
  }, []);

  const handleOnClick = async () => {
    setIsCapturing(true);

    setTimeout(async () => {
      const canvas = await html2canvas(content.current, {
        allowTaint: true,
        removeContainer: true,
        backgroundColor: "#171f6d",
        width: 550,
        windowWidth: 550,

        onclone: (clone) => {
          const content = clone.querySelector(".screenshot");
          const logo = (
            <div className="w-full flex justify-center">
              <Logo width={200} dark />
            </div>
          );
          const stringComponent = ReactDOMServer.renderToString(logo);

          content.insertAdjacentHTML("afterbegin", stringComponent);
        },
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.6);
      const file = dataURLtoFile(imgData, "photo.jpg");

      if (navigator.share) {
        await navigator.share({
          title: "Team Maker",
          text: "Compartido desde Team Maker",
          url: "https://teammaker.app/",
          files: [file],
        });
      }
      setIsCapturing(false);
    }, 300);
  };

  const variants = {
    idle: { x: 0, rotate: [-0.5, 0.5, -0.4, 0.4, -0.2, 0.2, 0], transition: { type: "spring" } },
    shuffling: {
      x: [0.2, -0.2],
      rotate: [0.5, -0.5],
      transition: {
        flip: Infinity,
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Layout capturing={isCapturing}>
      <div className="flex flex-col">
        <div className="screenshot flex flex-col gap-5 p-4" ref={content}>
          <div className="col-span-1 flex shadow-sm rounded-md w-full mx-auto">
            <div className="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md">
              <svg width={30} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <p className="text-gray-900 font-medium hover:text-gray-600">{location}</p>
                <p className="text-gray-500 capitalize">
                  {format(date, "EEEE dd/MM - p", {
                    locale: es,
                  })}
                  hs
                </p>
                <p className="text-gray-500">{players?.length} Jugadores</p>
              </div>
            </div>
          </div>
          <AnimateSharedLayout>
            <motion.div
              initial="idle"
              animate={shuffling ? "shuffling" : "idle"}
              variants={variants}
              style={{ minHeight: "100px" }}
              className="relative flex justify-center mb-5 text-center gap-3"
            >
              <PlayersList players={firstHalf} color="#FFFFFF" />
              <div className="z-10 absolute bottom-3">
                <Versus width={45} height={45} />
              </div>
              <PlayersList players={secondHalf} color="#2C3590" />
            </motion.div>
          </AnimateSharedLayout>
          <Alert text={listTeamStrings.position} />
        </div>
        <div className="flex justify-center items-center">
          <Button action={handleOnClick}>
            <div className="flex gap-4 w-full justify-center items-center px-6">
              <span className="text-gray-800">Compartir</span>
              <ShareIcon className="w-4 h-4 text-primary" />
            </div>
          </Button>
        </div>
      </div>
      <div className="w-full text-center p-4 pin-b">
        <Feedback />
      </div>
    </Layout>
  );
};

const listTeamStrings = {
  position: "La posición de los jugadores no determina el orden en que atajan.",
};

export default ListTeam;
