import PropTypes from "prop-types";
import "./styles.scss";
import { ReactComponent as Info } from "../../styles/svg/exclamation.svg";

const Alert = ({ text }) => {
  return (
    <div className="alert">
      <div className="self-center">
        <Info width={40} heigth={40} />
      </div>
      <p className="text-sm pr-3">{text}</p>
    </div>
  );
};

Alert.propTypes = {
  text: PropTypes.any,
};

export default Alert;
