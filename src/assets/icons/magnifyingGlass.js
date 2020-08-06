import React from 'react';

const MagnifyingGlass = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
      className={className}
    >
      <path
        fill="#5C5C5C"
        fillRule="evenodd"
        d="M1.373 1.373a4.702 4.702 0 016.64 0 4.7 4.7 0 01.533 6 .992.992 0 01.497.267l2.666 2.667a.991.991 0 11-1.403 1.403L7.64 9.044a.989.989 0 01-.268-.498 4.701 4.701 0 01-6-.532 4.703 4.703 0 010-6.641zm.841 5.8a3.51 3.51 0 004.958 0 3.51 3.51 0 000-4.958 3.51 3.51 0 00-4.958 0 3.511 3.511 0 000 4.958z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default MagnifyingGlass;
