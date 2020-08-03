import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './overlay.module.scss';

const Overlay = ({ children, isLoading }) => {
  return (
    <div className={classnames(styles.container, isLoading && styles.visible)}>
      {children}
    </div>
  );
};

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

Overlay.defaultProps = {
  children: null,
};

export default Overlay;
