import React from 'react';
import PropTypes from 'prop-types';

const Chevron = ({ width, height, color, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width={14}
      // height={7}
      width={width}
      height={height}
      viewBox="0 0 14 7"
      className={className}
    >
      <path
        fill={color}
        stroke="none"
        d="M6.5 0L13 6H0l6.5-6z"
        transform="matrix(1 0 0 -1 .5 6.5)"
      ></path>
    </svg>
  );
};

Chevron.propTypes = {
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Chevron.defaultProps = {
  className: null,
};

export default Chevron;
