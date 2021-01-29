import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";
import { ReactComponent as TeamSVG } from "../../styles/svg/team.svg";
import WavyDivider from "../../components/WavyDivider";
import { useReactPWAInstall } from "react-pwa-install";
import Logo from "../../components/Logo";
import Alert from '../../components/Alert/Alert';
import Layout from "../../components/Layout";

const Home = () => {
  const history = useHistory();
  const { pwaInstall, supported, isInstalled } = useReactPWAInstall();
  const [presentation, setPresentation] = useState(true);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setPresentation(false)
    }, 5000);
    return () => clearTimeout(timer);
  }, [presentation]);

  return (
      <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr 1fr",
        height: "100vh",
      }}
      className="mx-auto bg-white max-w-screen-xl"
    >
      <div className="grid place-items-center h-full w-full  bg-white shadow-xl py-5">
        <Logo width={250} />
        <TeamSVG className="w-3/4" />
      </div>

      <div className="flex flex-col bg-white text-primary font-bold">
        <WavyDivider />
        <div className="grid place-items-center w-full flex-1 bg-primary">
          {presentation ?
            <p className="text-white text-xl">
              {`Creá equipos rapidamente con Team Maker \n
                Los vas a poder compartir en donde quieras \n
                Comenzá ya mismo apretando en el botón.
              `}
            </p> :
            <>
              <Button text="Crear ya" action={navigate} />
              {supported() && !isInstalled() && (
                <div className="grid place-items-center w-full h-12">
                  <Button
                    action={handleInstalation}
                    text="Instalar la App"
                  />
                </div>
              )}
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
