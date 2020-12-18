import React, { useEffect, useState } from "react";
import { ReactComponent as Versus } from "../../versus.svg";
import { ReactComponent as TShirt } from "../../styles/svg/whiteTShirt.svg";
import { ReactComponent as TShirtBlue } from "../../styles/svg/blueTShirt.svg";
import Alert from "../../components/Alert/Alert";
import Button from "../../components/Button/Button";

const List = ({ players = [] }) => {
  const [firstHalf, setFH] = useState([]);
  const [secondHalf, setSH] = useState([]);

  useEffect(() => {
    const half = Math.ceil(players?.length / 2);
    setFH(players.splice(0, half));
    setSH(players.splice(-half));
  }, []);

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
    <div className="flex flex-col flex-1">
      <div className="flex-1">
        <div className="flex justify-around mb-5 text-center ">
          <div className="w-80 bg-white	min-h-80 mx-3 rounded-md divide-y mr-1">
            <div className="flex justify-center items-center my-2">
              <TShirt />
              <h6 className="my-3 font-display font-bold text-3xl ml-1">
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
            <Versus height={52} width={52} />
          </div>
          <div className="w-80 bg-white	min-h-80 mx-3 rounded-md divide-y ml-1">
            <div className="flex justify-center items-center my-2">
              <TShirtBlue />
              <h6 className="my-3 font-display font-bold text-3xl ml-1">
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
      </div>
      <Button text={"Compartir"} action={handleOnClick} />
    </div>
  );
};

export default List;
