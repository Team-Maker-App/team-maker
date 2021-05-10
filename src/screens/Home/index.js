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
    history.push({ pathname: "/create" });
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

  const CarrouselItem = ({ SVG, text }) => {
    return (
      <>
        <div className="flex items-end justify-center h-full">
          <SVG className="w-full h-auto object-cover md:w-9/12" />
        </div>
        <p className="font-sans text-center text-xl">{text}</p>
      </>
    );
  };

  return (
    <div className="home bg-primaryDesktop">
      <section className="flex justify-center items-center h-full">
        <Logo height={30} />
      </section>
      <Carousel
        responsive={responsive}
        infinite={true}
        showDots={true}
        removeArrowOnDeviceType={["mobile", "table", "desktop"]}
        dotListClass="dots"
        containerClass="container mx-auto h-full"
        itemClass="carousel__item"
      >
        <CarrouselItem text="Escribe el nombre de las personas que van a participar" SVG={FormExample} />
        <CarrouselItem text="Team Maker se encarga de mezclarlos aleatoriamente" SVG={RandomExample} />
        <CarrouselItem text="Comparte el resultado en donde quieras" SVG={ShareExample} />
      </Carousel>
      <section className="flex flex-col h-full">
        <div className="relative">
          <WavyDivider className="w-full" />
        </div>
        <div className="w-full h-full pb-0 pt-2 md:p-2 bg-primaryDark ">
          <div className="flex items-center container mx-auto h-full md:justify-between justify-end px-12 sm:px-0">
            <Isotipo className="hidden md:block h-12" />
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
      </section>
    </div>
  );
};

export default Home;
