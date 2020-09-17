import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import Chevron from 'assets/icons/chevron';
import { getSelectedTeam } from 'actions';
import { COLORS } from 'enums';

import selectMenuStyles from 'components/_shared/selectMenuStyles';
import styles from './filter.module.scss';

const Filter = ({ teams, getSelectedTeam }) => {
  const years = [
    { value: 2019, label: '2019 - 2020' },
    { value: 2018, label: '2018 - 2019' },
    { value: 2017, label: '2017 - 2018' },
  ];

  const chevron = () => (
    <Chevron
      color={COLORS.DARK_GREY}
      width={10}
      height={5}
      className={styles.chevron}
    />
  );

  const { selectedTeam } = teams;
  const handleChange = (e) => {
    getSelectedTeam(selectedTeam, e.value);
  };

  return (
    <div className={styles.container}>
      <Select
        styles={selectMenuStyles()}
        defaultValue={years[0]}
        placeholder={years[0]}
        options={years}
        hideSelectedOptions
        isSearchable={false}
        components={{
          DropdownIndicator: chevron,
        }}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

const mapStateToProps = ({ teams, players }) => {
  return { teams: teams, players: players };
};

export default connect(mapStateToProps, { getSelectedTeam })(Filter);
