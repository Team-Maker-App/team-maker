import React, { forwardRef } from "react";
import Logo from "../Logo";
import SpinnerIcon from "../../components/Icons/SpinnerIcon";

const Layout = forwardRef(({ children, capturing }, ref) => (
  <div
    ref={ref}
    style={{
      display: "grid",
      gridTemplateRows: "80px 1fr",
      height: "100vh",
      width: capturing ? "550px" : "auto",
    }}
    className={`background ${capturing ? "" : "container mx-auto"}`}
  >
    <div className="grid place-items-center h-full w-full  bg-primaryDark shadow-xl">
      <Logo width={200} dark />
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
));

export default Layout;
