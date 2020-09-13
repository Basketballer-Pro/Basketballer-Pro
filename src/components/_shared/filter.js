import React, { useState } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import styles from './filter.module.scss';
import { getSelectedTeam } from 'actions';

const menuStyles = (provided) => {
  return {
    option: (provided, state) => ({
      display: state.isSelected && 'none',
    }),
  };
};

const Filter = ({ teams, players, title, options, array, getSelectedTeam }) => {
  const years = [
    { value: 2019, label: '2019 - 2020' },
    { value: 2018, label: '2018 - 2019' },
    { value: 2017, label: '2017 - 2018' },
  ];

  const selectedTeam = teams.selectedTeam;

  // const [optionsMenu, setOptionsMenu] = useState(years);

  const handleChange = (e) => {
    getSelectedTeam(selectedTeam, null, null, e.value);
  };

  // const defaultValue = { value: 2019, label: '2019 - 2020' };

  return (
    <div className={styles.container}>
      <Select
        styles={menuStyles()}
        defaultValue={years[0]}
        options={years}
        // defaultMenuIsOpen
        // value={years.find((year) => year.value === selectedYear)}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

const mapStateToProps = ({ teams, players }) => {
  return { teams: teams, players: players };
};

export default connect(mapStateToProps, { getSelectedTeam })(Filter);
