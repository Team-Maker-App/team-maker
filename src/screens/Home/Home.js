import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";
import { ReactComponent as TeamSVG } from "../../styles/svg/team.svg";
import WavyDivider from "../../components/WavyDivider";
import { useReactPWAInstall } from "react-pwa-install";
import Logo from "../../components/Logo";

const Home = () => {
  const history = useHistory();
  const { pwaInstall, supported, isInstalled } = useReactPWAInstall();

  const navigate = () => {
    history.push({
      pathname: "/create",
    });
  };

  const handleInstalation = () => {
    pwaInstall({
      title: "Instalar Team Maker",
      description: "This is a very good app that does a lot of useful stuff. ",
    })
      .then(() =>
        alert("Felicidades. Team Maker ya está en tu pantalla de inicio")
      )
      .catch(() => console.log("User opted out from installing"));
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr 1fr",
        height: "100vh",
      }}
      className="background"
    >
      <div className="grid place-items-center h-full w-full  bg-white shadow-xl py-5">
        <Logo width={250} />
        <TeamSVG className="w-3/4" />
      </div>

      <div className="flex flex-col bg-white text-primary font-bold">
        <WavyDivider />
        <div className="grid place-items-center w-full flex-1 bg-primary">
          <Button text="Crear ya" action={navigate} />
        </div>
        {supported() && !isInstalled() && (
          <div className="grid place-items-center w-full h-12">
            <Button
              style={{ width: "100%" }}
              action={handleInstalation}
              className="w-full flex-1"
              text="Instalar la App"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
