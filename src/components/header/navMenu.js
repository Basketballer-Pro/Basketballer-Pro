import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './navMenu.module.scss';

const NavMenu = ({
  history: {
    location: { pathname },
  },
  selectedTeam: { teamColor, urlName },
  playerId,
}) => {
  const activeStyle = {
    pointerEvents: 'none',
    color: teamColor,
  };
  const activeBorder = {
    borderColor: teamColor,
  };
  const getActiveStyle = (path) =>
    pathname.indexOf(path) >= 0 ? activeBorder : null;

  return (
    <div className={styles.container}>
      <NavLink
        to={
          playerId ? `/${urlName}/players/${playerId}` : `/${urlName}/players`
        }
        activeStyle={activeStyle}
      >
        Players
        <div className={styles.navLink} style={getActiveStyle('/players')} />
      </NavLink>
      <NavLink to={`/${urlName}/standings`} activeStyle={activeStyle}>
        Standings
        <div className={styles.navLink} style={getActiveStyle('/standings')} />
      </NavLink>
      <NavLink to={`/${urlName}/games`} activeStyle={activeStyle}>
        Games
        <div className={styles.navLink} style={getActiveStyle('/games')} />
      </NavLink>
    </div>
  );
};

NavMenu.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
  selectedTeam: PropTypes.shape({
    teamColor: PropTypes.string,
    urlName: PropTypes.string,
  }).isRequired,
  playerId: PropTypes.string,
};

NavMenu.defaultProps = {
  playerId: null,
};

export default withRouter(NavMenu);
