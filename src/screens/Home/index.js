import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";
import { ReactComponent as TeamSVG } from "../../styles/svg/team.svg";
import WavyDivider from "../../components/WavyDivider";
import Logo from "../../components/Logo";
import Alert from '../../components/Alert/Alert';
import Layout from "../../components/Layout";

const Home = () => {
  const history = useHistory();

  const navigate = () => {
    history.push({
      pathname: "/create",
    });
  };

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

      <div className="flex flex-col bg-white text-primary w-full">
        <WavyDivider />
        <div className="grid place-items-center flex-1 bg-primary">
          <Button text="Crear ya" action={navigate} />
        </div>
      </div>
    </div>
  );
};

export default Home;
