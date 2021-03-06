import React, { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { ReactComponent as Versus } from "../../versus.svg";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";
import { es } from "date-fns/esm/locale";
import html2canvas from "html2canvas";

// Components
import Alert from "../../components/Alert/Alert";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout";
import ShirtIcon from "../../components/Icons/ShirtIcon";
import ShareIcon from "../../components/Icons/ShareIcon";
import Logo from "../../components/Logo";
import Feedback from "../../components/Feedback/Feedback";
import matchStore from "../../store/matchStore";

const ListTeam = () => {
  const content = useRef();
  const history = useHistory();
  const [firstHalf, setFH] = useState([]);
  const [isCapturing, setIsCapturing] = useState(false);
  const [secondHalf, setSH] = useState([]);

  const { location, players, date } = matchStore();

  useEffect(() => {
    if (players.length > 0) {
      const half = Math.ceil(players?.length / 2);
      setFH(players.splice(0, half));
      setSH(players.splice(-half));
    } else {
      history.push("/create");
    }
  }, [players, history]);

  function dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

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

  const truncate = (input) => {
    if (input.length > 15) {
      return input.substring(0, 15) + "...";
    }
    return input;
  };

  return (
    <Layout capturing={isCapturing}>
      <div className="flex flex-col">
        <div className="screenshot flex flex-col gap-5 p-4 pt-10 pb-16" ref={content}>
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
                <p className="text-gray-500">12 Jugadores</p>
              </div>
            </div>
          </div>
          <div style={{ minHeight: "100px" }} className="relative flex justify-center mb-5 text-center gap-3">
            <div className="relative w-1/2 bg-white rounded-md p-2">
              <ShirtIcon color="white" />
              <ul className="divide-y divide-gray-200">
                {firstHalf?.map((player, index) => (
                  <li key={index} className="py-1 flex font-display text-lg p-1 my-2 capitalize justify-center">
                    {truncate(player)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="z-10 absolute bottom-3">
              <Versus width={45} height={45} />
            </div>
            <div className="relative w-1/2 bg-white rounded-md p-2">
              <ShirtIcon />
              <ul className="divide-y divide-gray-200">
                {secondHalf?.map((player, index) => (
                  <li key={index} className="py-1 flex font-display text-lg p-1 my-2 capitalize justify-center">
                    {truncate(player)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
