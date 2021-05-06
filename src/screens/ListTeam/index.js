import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Versus } from "../../versus.svg";
import { useHistory } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/esm/locale";
import html2canvas from "html2canvas";

// Components
import Alert from "../../components/Alert/Alert";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout";
import ShirtIcon from "../../components/Icons/ShirtIcon";
import ShareIcon from "../../components/Icons/ShareIcon";
import SpinnerIcon from "../../components/Icons/SpinnerIcon";

const ListTeam = ({ location }) => {
  const content = useRef();
  const history = useHistory();
  const { players, match } = location.state;
  const [firstHalf, setFH] = useState([]);
  const [secondHalf, setSH] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!players) {
      history.push("/create");
    } else {
      const half = Math.ceil(players?.length / 2);
      setFH(players.splice(0, half));
      setSH(players.splice(-half));
    }
  }, [players, history]);

  console.log("match", match);

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

  const handleOnClick = () => {
    setLoading(true);

    html2canvas(content.current, {
      allowTaint: true,
      logging: true,
      removeContainer: true,
      backgroundColor: "#171f6d",
      /* onclone: (element) => {
        const svgElements = Array.from(
          element.getElementsByClassName("shirtIcon")
        );
      }, */
      ignoreElements: (element) => {
        if (element.classList.contains("non-shareable")) {
          return true;
        }
      },
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 0.5);
      const file = dataURLtoFile(imgData, "photo.jpg");

      if (navigator.share) {
        navigator
          .share({
            title: "Team Maker",
            text: "Compartido desde Team Maker",
            url: "https://teammaker.app/",
            files: [file],
          })
          .then(() => {
            console.log("Successfully shared");
            setLoading(false);
          })
          .catch((error) => {
            console.error("Something went wrong sharing the blog", error);
            setLoading(false);
          });
      }
    });
  };

  const truncate = (input) => {
    if (input.length > 10) {
      return input.substring(0, 10) + "...";
    }
    return input;
  };

  return (
    <Layout ref={content}>
      <div className="flex flex-col gap-5 p-4 pt-10">
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
              <p className="text-gray-900 font-medium hover:text-gray-600">
                {match.location}
              </p>
              <p className="text-gray-500 capitalize">
                {format(parseISO(match.date), "EEEE dd/MM - p", {
                  locale: es,
                })}{" "}
                hs
              </p>
              <p className="text-gray-500">12 Jugadores</p>
            </div>
          </div>
        </div>
        <div
          style={{ minHeight: "100px" }}
          className="relative flex justify-center mb-5 text-center gap-3"
        >
          <div className="relative w-1/2 bg-white rounded-md p-2">
            <ShirtIcon color="white" />
            <ul className="divide-y divide-gray-200">
              {firstHalf?.map((player, index) => (
                <li
                  key={index}
                  className="py-1 flex font-display text-lg p-1 my-2 capitalize justify-center"
                >
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
            {/* <div className="flex border-b border-gray-200 justify-between items-center pb-3">
              <h3 className="text-md leading-4 font-medium ml-1 text-primaryDark">
                Equipo 1
              </h3>
              
            </div> */}
            <ul className="divide-y divide-gray-200">
              {secondHalf?.map((player, index) => (
                <li
                  key={index}
                  className="py-1 flex font-display text-lg p-1 my-2 capitalize justify-center"
                >
                  {truncate(player)}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Alert text={listTeamStrings.position} />
        <div className="flex justify-center items-center">
          <Button action={handleOnClick} className="non-shareable">
            <div className="flex gap-4 w-full justify-center items-center">
              <span className="text-gray-800">Compartir</span>
              {loading ? (
                <SpinnerIcon className="animate-spin w-4 h-4 text-primary" />
              ) : (
                <ShareIcon className="w-4 h-4 text-primary" />
              )}
            </div>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

const listTeamStrings = {
  position: "La posición de los jugadores no determina el orden en que atajan",
};

export default ListTeam;
