import React from 'react';
import PropTypes from 'prop-types';

const WavyDivider = (props) => {
  const { className } = props;
  return (
    <svg
      viewBox="0 0 411 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 19.23s31.5 43.27 205.5 0c174-43.269 205.5 0 205.5 0V48H0V19.23z"
        fill="#2C3590"
      />
    </svg>
  );
};

WavyDivider.defaultProps = {
  className: '',
};

WavyDivider.propTypes = {
  className: PropTypes.string,
};

export default WavyDivider;
