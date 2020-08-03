import React from 'react';
import PropTypes from 'prop-types';

const Chevron = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="auto"
      viewBox="0 0 14 7"
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
};

export default Chevron;
