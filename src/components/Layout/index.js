import PropTypes from "prop-types";
import { forwardRef, useEffect } from "react";
import "./styles.scss";
import Logo from "../Logo";

// Components
import InstallPWA from "../../components/InstallPWA";

const LayoutFunction = ({ children }, ref) => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <div ref={ref} className="layout container background">
      <div className="grid place-items-center h-full w-full bg-primaryDark shadow-xl relative">
        <Logo width={150} dark />
        <div className="absolute right-4">
          <InstallPWA />
        </div>
      </div>
      {children}
    </div>
  );
};

LayoutFunction.propTypes = {
  children: PropTypes.any,
};

const Layout = forwardRef(LayoutFunction);

export default Layout;
