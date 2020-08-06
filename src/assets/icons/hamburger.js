import React from 'react';

const Hamburger = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
      className={className}
    >
      <path fill="#fff" d="M0 0h24v24H0V0z"></path>
      <path
        fill="#909090"
        d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"
      ></path>
    </svg>
  );
};

export default Hamburger;
