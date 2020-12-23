import React, { useEffect, useState } from "react";
import { ReactComponent as Versus } from "../../versus.svg";
import { useHistory } from "react-router-dom";
import Alert from "../../components/Alert/Alert";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout";
import ShirtIcon from "../../components/Icons/ShirtIcon";

const ListTeam = ({ location }) => {
  const history = useHistory();
  const [firstHalf, setFH] = useState([]);
  const [secondHalf, setSH] = useState([]);

  useEffect(() => {
    if (!location.players) {
      history.push("/create");
    } else {
      const half = Math.ceil(location.players?.length / 2);
      setFH(location.players.splice(0, half));
      setSH(location.players.splice(-half));
    }
  }, [location, history]);

  const handleOnClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Team Maker",
          text: "Esto esta compartido desde Team Maker",
          url:
            "https://tmssl.akamaized.net/images/portrait/originals/57473-1458043478.jpg",
        })
        .then(() => {
          console.log("Successfully shared");
        })
        .catch((error) => {
          console.error("Something went wrong sharing the blog", error);
        });
    }
  };

  const truncate = (input) => {
    if (input.length > 10) {
      return input.substring(0, 10) + "...";
    }
    return input;
  };

  return (
    <Layout>
      <div
        style={{ gridTemplateRows: "1fr 120px 80px" }}
        className="grid items-center px-4 py-11 max-w-screen-xl mx-auto w-full"
      >
        <div className="flex justify-center mb-5 text-center gap-2 h-full">
          <div className="w-1/2 bg-white rounded-md p-2">
            <div className="flex justify-center items-center my-2">
              <ShirtIcon color="white" />
              <h6 className="my-3 uppercase font-bold text-xl ml-1 text-primaryDark">
                Equipo 1
              </h6>
            </div>
            {firstHalf?.map((player, index) => (
              <p key={index} className="font-display text-2xl h-8 p-1 my-2">
                {truncate(player)}
              </p>
            ))}
          </div>
          <div className="absolute self-end mb-4	">
            <Versus />
          </div>
          <div className="w-1/2 bg-white rounded-md p-2">
            <div className="flex justify-center items-center my-2">
              <ShirtIcon />
              <h6 className="my-3 uppercase font-bold text-xl ml-1 text-primaryDark">
                Equipo 2
              </h6>
            </div>
            {secondHalf?.map((player, index) => (
              <p key={index} className="font-display text-2xl h-8 p-1 my-2 ">
                {truncate(player)}
              </p>
            ))}
          </div>
        </div>
        <Alert />
        <div className="flex justify-center items-center">
          <Button text="Compartir" action={handleOnClick} />
        </div>
      </div>
    </Layout>
  );
};

export default ListTeam;
