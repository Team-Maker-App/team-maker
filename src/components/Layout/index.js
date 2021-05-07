import React, { forwardRef } from "react";
import Logo from "../Logo";
import LoaderScreen from "../../screens/LoaderScreen";

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
    {capturing && <LoaderScreen />}
  </div>
));

export default Layout;
