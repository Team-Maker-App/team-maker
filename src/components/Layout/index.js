import React from "react";
import Logo from "../Logo";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center background h-screen">
      <div className="grid place-items-center h-24 w-full  bg-primaryDark shadow-xl">
        <Logo width={200} dark />
      </div>
      <div className="flex-1 p-8 w-full">{children}</div>
    </div>
  );
};

export default Layout;
