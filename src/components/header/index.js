import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getTeams } from 'actions';

import DropdownMenu from './dropdownMenu';
import UserLogin from './userLogin';
import NavMenu from './navMenu';

import styles from './index.module.scss';

const Header = ({
  history,
  location: { pathname },
  getTeams,
  selectedTeam,
  player: {
    details: { personId },
  },
}) => {
  const getTeamsCallback = () => {
    getTeams(pathname, history);
  };

  useEffect(getTeamsCallback, []);

  return (
    <div className={styles.container}>
      <DropdownMenu />
      <NavMenu selectedTeam={selectedTeam} playerId={personId} />
      <UserLogin />
    </div>
  );
};

const mapStateToProps = ({ teams: { selectedTeam }, player }) => {
  return {
    selectedTeam,
    player,
  };
};

Header.propTypes = {
  getTeams: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  player: PropTypes.object.isRequired,
  selectedTeam: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getTeams })(withRouter(Header));
