import React, { useEffect } from "react";
import "./styles.scss";
import "react-multi-carousel/lib/styles.css";

import { ReactComponent as FormExample } from "../../styles/svg/undraw_text_field_htlv.svg";
import { ReactComponent as RandomExample } from "../../styles/svg/undraw_random_thoughts_xejj.svg";
import { ReactComponent as ShareExample } from "../../styles/svg/undraw_Social_media_re_w12q.svg";
import { ReactComponent as Isotipo } from "../../styles/svg/isotipo.svg";

import { useHistory } from "react-router-dom";
import Logo from "../../components/Logo";
import Button from "../../components/Button/Button";

import Carousel from "react-multi-carousel";
import WavyDivider from "../../components/WavyDivider";
import InstallPWA from "../../components/InstallPWA";

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  const navigate = () => {
    history.push({
      pathname: "/create",
    });
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    table: {
      breakpoint: { max: 1200, min: 850 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 850, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="home bg-primaryDesktop flex flex-col h-screen pt-12">
      <div className="grid place-items-center">
        <Logo height={30} />
      </div>
      <Carousel
        responsive={responsive}
        containerClass="container mx-auto h-full mb-16"
        infinite={true}
        showDots={true}
        removeArrowOnDeviceType={["mobile", "table"]}
        dotListClass="dots"
      >
        <div className="flex flex-col items-center gap-6">
          <FormExample width={300} height={"auto"} />
          <p className="font-sans text-center text-xl w-8/12">
            {"Escribe el nombre de las personas \n que van a participar"}
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 bg-5">
          <RandomExample width={300} height={"auto"} />
          <p className="font-sans text-center text-xl w-8/12">
            {"Team Maker se encarga\nde mezclarlos aleatoriamente"}
          </p>
        </div>
        <div className="flex flex-col items-center  gap-6">
          <ShareExample height={"auto"} width={300} />
          <p className="font-sans text-center text-xl w-8/12">{"Comparti el resultado en donde quieras"}</p>
        </div>
      </Carousel>
      <div className="relative">
        <WavyDivider className="w-full " />
      </div>
      <div className="w-full h-48 bg-primaryDark ">
        <div className="flex items-center container mx-auto h-full md:justify-between justify-end px-12 sm:px-0">
          <Isotipo className="hidden md:block" />
          <div className="flex gap-3">
            <InstallPWA />
            <Button
              text="Comenzar"
              className="py-2 px-4 font-sans text-center text-xl text-primary"
              action={navigate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
