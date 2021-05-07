import React from "react";
import Logo from "../Logo";
import SpinnerIcon from "../../components/Icons/SpinnerIcon";

const LoaderScreen = () => {
  return (
    <div className="bg-primaryDark grid place-items-center z-50 w-full h-full absolute">
      <div className="flex flex-col gap-3 items-center">
        <Logo width={200} dark />
        <span className="flex font-semibold gap-2 items-center opacity-70 text-white uppercase">
          <SpinnerIcon className="animate-spin w-4 h-4 text-white" />
          Cargando
        </span>
      </div>
    </div>
  );
};

export default LoaderScreen;
