import React from 'react';

const Close = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 512 512"
    >
      <path
        fill={color}
        d="M512 84.853L427.148 0 256 171.147 84.853 0 0 84.853 171.147 256 0 427.147 84.853 512 256 340.853 427.148 512 512 427.147 340.853 256zm-42.425 342.294l-42.427 42.426L256 298.426 84.853 469.574l-42.426-42.426L213.574 256 42.427 84.853l42.426-42.426L256 213.574 427.148 42.427l42.427 42.426L298.427 256z"
      ></path>
    </svg>
  );
};

export default Close;
