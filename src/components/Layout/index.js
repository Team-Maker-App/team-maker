import React, { forwardRef, useEffect } from "react";
import "./styles.scss";
import Logo from "../Logo";

// Components
import SpinnerIcon from "../../components/Icons/SpinnerIcon";
import InstallPWA from "../../components/InstallPWA";

const Layout = forwardRef(({ children, capturing }, ref) => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width: capturing ? "550px" : "auto",
      }}
      className={`layout background ${capturing ? "" : "container mx-auto"}`}
    >
      <div className="grid place-items-center h-full w-full bg-primaryDark shadow-xl relative">
        <Logo width={200} dark />
        <div className="absolute right-4">
          <InstallPWA />
        </div>
      </div>
      {children}
      {capturing && (
        <div className="bg-primaryDark grid place-items-center z-50 absolute h-screen w-screen">
          <div className="flex flex-col gap-3 items-center">
            <Logo width={200} dark />
            <span className="flex font-semibold gap-2 items-center opacity-70 text-white uppercase">
              <SpinnerIcon className="animate-spin w-4 h-4 text-white" />
              Cargando
            </span>
          </div>
        </div>
      )}
    </div>
  );
});

export default Layout;
