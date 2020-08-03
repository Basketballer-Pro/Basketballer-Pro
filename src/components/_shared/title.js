import React from 'react';
import PropTypes from 'prop-types';

import styles from './title.module.scss';

const Title = ({ title, teamColor, isRecentGames }) => {
  return (
    <div
      style={{ backgroundColor: teamColor }}
      className={isRecentGames ? styles.gameStats : styles.totalStats}
    >
      {title}
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  teamColor: PropTypes.string.isRequired,
  isRecentGames: PropTypes.bool,
};

Title.defaultProps = {
  isRecentGames: false,
};

export default Title;
