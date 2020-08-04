import React from 'react';
import PropTypes from 'prop-types';

const Bell = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="22"
      viewBox="0 0 20 22"
      className={className}
    >
      <path
        fill="#909090"
        fillRule="evenodd"
        stroke="none"
        d="M12.665 2.78A2.93 2.93 0 009.731 0a2.93 2.93 0 00-2.935 2.78 7.483 7.483 0 00-4.593 6.892v4.205A2.38 2.38 0 000 16.243a2.381 2.381 0 002.39 2.372h3.533a3.385 3.385 0 106.77 0h4.378c1.32 0 2.39-1.063 2.39-2.372a2.381 2.381 0 00-2.203-2.366V9.672a7.484 7.484 0 00-4.593-6.892zm-1.754 15.835H7.704a1.603 1.603 0 003.207 0zM7.96 4.195a5.763 5.763 0 00-4.024 5.484v4.457c0 .923-.754 1.673-1.682 1.673a.56.56 0 00-.562.557.56.56 0 00.565.557h14.948c.311 0 .564-.25.564-.557a.561.561 0 00-.561-.557c-.93 0-1.682-.747-1.682-1.673V9.68a5.764 5.764 0 00-4.024-5.484l-.65-.207V2.804c0-.613-.502-1.112-1.121-1.112s-1.122.5-1.122 1.112v1.184l-.65.207z"
      ></path>
    </svg>
  );
};

Bell.propTypes = {
  className: PropTypes.string,
};

Bell.defaultProps = {
  className: null,
};

export default Bell;
