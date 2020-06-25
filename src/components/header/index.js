import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
    details: { person_id },
  },
}) => {
  console.log(history);
  console.log('person_id', person_id);
  useEffect(() => {
    // const {
    //   history,
    //   location: { pathname },
    //   getTeams,
    // } = this.props;

    getTeams(pathname, history);
  }, []);

  // const {
  //   selectedTeam,
  //   player: {
  //     details: { person_id },
  //   },
  // } = this.props;

  return (
    <div className={styles.container}>
      <DropdownMenu />
      <NavMenu selectedTeam={selectedTeam} playerId={person_id} />
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

export default connect(mapStateToProps, { getTeams })(withRouter(Header));
