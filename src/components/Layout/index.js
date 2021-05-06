import React, { forwardRef } from "react";
import Logo from "../Logo";

const Layout = forwardRef(({ children }, ref) => (
  <div
    ref={ref}
    style={{
      display: "grid",
      gridTemplateRows: "80px 1fr",
      height: "100vh",
    }}
    className="background"
  >
    <div className="grid place-items-center h-full w-full  bg-primaryDark shadow-xl">
      <Logo width={200} dark />
    </div>
    {children}
  </div>
));

export default Layout;
