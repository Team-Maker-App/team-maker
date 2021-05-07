import React from "react";
import { ReactComponent as FormExample } from "../../styles/svg/undraw_text_field_htlv.svg";
import { ReactComponent as RandomExample } from "../../styles/svg/undraw_random_thoughts_xejj.svg";
import { ReactComponent as ShareExample } from "../../styles/svg/undraw_Social_media_re_w12q.svg";
import { ReactComponent as Isotipo } from "../../styles/svg/isotipo.svg";

import Button from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
import Logo from "../../components/Logo";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WavyDivider from "../../components/WavyDivider";

const HomeDesktop = () => {
  const history = useHistory();

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
    <div className=" bg-primaryDesktop flex flex-col h-screen pt-12">
      <div className="grid place-items-center">
        <Logo height={50} />
      </div>
      <Carousel
        responsive={responsive}
        containerClass="container mx-auto h-full mb-16"
        infinite={true}
        showDots={true}
        removeArrowOnDeviceType={["mobile", "table"]}
      >
        <div className="flex flex-col items-center gap-6">
          <FormExample width={402} height={220} />
          <p className="font-sans text-center text-xl w-8/12">
            {"Escribe el nombre de las personas \n que van a participar"}
          </p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <RandomExample width={402} height={220} />
          <p className="font-sans text-center text-xl w-8/12">
            {"Team Maker se encarga\nde mezclarlos aleatoriamente"}
          </p>
        </div>
        <div className="flex flex-col items-center  gap-6">
          <ShareExample height={220} width={402} />
          <p className="font-sans text-center text-xl w-8/12">
            {"Comparti el resultado en donde quieras"}
          </p>
        </div>
      </Carousel>
      <div className="relative">
        <WavyDivider className="w-full " />
      </div>
      <div className="w-full h-48 bg-primaryDark ">
        <div className="flex items-center container mx-auto h-full md:justify-between justify-end px-12 sm:px-0">
          <Isotipo className="hidden md:block" />
          <Button className="p-6 px-8" action={navigate}>
            <p className="font-sans text-center text-2xl text-primary">
              {"Comenzar >"}
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeDesktop;
