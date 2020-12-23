import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";
import { ReactComponent as WavyBackground } from "../../styles/svg/curveSeparator.svg";
import { ReactComponent as TeamSVG } from "../../styles/svg/team.svg";
import { ReactComponent as DarkLogo } from "../../styles/svg/darkLogo.svg";
import { useReactPWAInstall } from "react-pwa-install";

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
    <div className="flex flex-col justify-around items-center homeBackground h-screen">
      <div className="z-50 fixed top-14">
        <DarkLogo width={330} />
        <TeamSVG />
      </div>
      <div className="z-50 fixed bottom-20">
        <Button text="Crear ya" action={navigate} />
        {supported() && !isInstalled() && (
          <Button action={handleInstalation} text="Instalar la app" />
        )}
      </div>
      <div className="fixed bottom-0 z-0 md:h-82 h-2/6">
        <WavyBackground />
      </div>
    </div>
  );
};

export default Home;
