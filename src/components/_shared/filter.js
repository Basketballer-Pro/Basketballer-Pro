import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Chevron from 'assets/icons/chevron';
import { getSelectedTeam } from 'actions';
import { COLORS, YEARS } from 'enums';

import selectMenuStyles from 'components/_shared/selectMenuStyles';
import styles from './filter.module.scss';

const Filter = ({ selectedTeam, getSelectedTeam }) => {
  const chevron = () => (
    <Chevron
      color={COLORS.DARK_GREY}
      width={10}
      height={5}
      className={styles.chevron}
    />
  );

  console.log('here');

  const handleChange = (e) => {
    getSelectedTeam(selectedTeam, e.value);
  };

  return (
    <div className={styles.container}>
      <Select
        styles={selectMenuStyles()}
        defaultValue={YEARS[0]}
        options={YEARS}
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
  return { selectedTeam: teams.selectedTeam, players: players };
};

Filter.propTypes = {
  getSelectedTeam: PropTypes.func.isRequired,
  selectedTeam: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getSelectedTeam })(Filter);
