import React, { useEffect, useState } from "react";
import { ReactComponent as Versus } from "../../versus.svg";
import { ReactComponent as TShirt } from "../../styles/svg/whiteTShirt.svg";
import { ReactComponent as TShirtBlue } from "../../styles/svg/blueTShirt.svg";
import Alert from "../../components/Alert/Alert";
import Button from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout";

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

  return (
    <Layout>
      <div
        style={{ gridTemplateRows: "1fr 120px 80px" }}
        className="grid items-center p-4 max-w-screen-xl mx-auto w-full"
      >
        <div className="flex justify-center mb-5 text-center gap-2 h-full">
          <div className="w-1/2 bg-white rounded-md">
            <div className="flex justify-center items-center my-2">
              <TShirt />
              <h6 className="my-3 font-display font-bold text-2xl ml-1">
                Equipo 1
              </h6>
            </div>
            {firstHalf?.map((player, index) => (
              <p key={index} className="font-display text-2xl h-8 p-1 my-2">
                {player}
              </p>
            ))}
          </div>
          <div className="absolute self-end	">
            <Versus className="w-16 md:w-56" />
          </div>
          <div className="w-1/2 bg-white rounded-md">
            <div className="flex justify-center items-center my-2">
              <TShirtBlue />
              <h6 className="my-3 font-display font-bold text-2xl ml-1">
                Equipo 2
              </h6>
            </div>
            {secondHalf?.map((player, index) => (
              <p key={index} className="font-display text-2xl h-8 p-1 my-2">
                {player}
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
