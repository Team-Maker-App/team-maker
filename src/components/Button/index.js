import PropTypes from "prop-types";
import React from "react";
import "./styles.scss";

const Button = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  action: PropTypes.func,
  children: PropTypes.any,
};

export default Button;
