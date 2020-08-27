import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import styles from './filter.module.scss';
import { getSelectedTeam } from 'actions';

const Filter = ({ teams, players, title, options, array, getSelectedTeam }) => {
  const years = [
    { value: 2019, label: 2019 },
    { value: 2018, label: 2018 },
    { value: 2017, label: 2017 },
    { value: 2016, label: 2016 },
  ];

  const selectedTeam = teams.selectedTeam;
  const selectedTeamId = selectedTeam.teamId;

  const handleChange = (e) => {
    getSelectedTeam(selectedTeam, null, null, e.value);
  };

  return (
    <div className={styles.container}>
      <Select
        defaultValue={years[0]}
        options={years}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

const mapStateToProps = ({ teams, players }) => {
  return { teams: teams, players: players };
};

export default connect(mapStateToProps, { getSelectedTeam })(Filter);
