import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles.scss";

const Button = ({ children, variant = "primary", ...props }) => {
  const btnClasses = classNames("button", {
    primary: variant === "primary",
    secondary: variant === "secondary",
  });

  return (
    <button className={btnClasses} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  action: PropTypes.func,
  children: PropTypes.any,
  variant: PropTypes.string,
};

export default Button;
