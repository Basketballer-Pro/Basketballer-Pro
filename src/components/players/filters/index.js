import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { getSelectedTeam, filterPlayers } from 'actions';
import { YEARS, POSITIONS, COLORS } from 'enums';
import Chevron from 'assets/icons/chevron';
import selectMenuStyles from 'components/_shared/selectMenuStyles';

import styles from './index.module.scss';

const Filters = ({ selectedTeam, getSelectedTeam, filterPlayers }) => {
  const [valueYears, setValueYears] = useState(YEARS[0]);
  const [valuePositions, setValuePositions] = useState(null);
  const positionPlaceholer = 'Position';

  useEffect(() => {
    setValuePositions(positionPlaceholer);
  }, [selectedTeam]);

  const chevron = () => (
    <Chevron
      color={COLORS.DARK_GREY}
      width={10}
      height={5}
      className={styles.chevron}
    />
  );

  const handleYearsChange = (e) => {
    setValueYears(e);
    setValuePositions(positionPlaceholer);
    getSelectedTeam(selectedTeam, e.value);
  };

  const handlePositionsChange = (e) => {
    setValuePositions(e);
    filterPlayers(e.value);
  };

  return (
    <div className={styles.container}>
      <Select
        styles={selectMenuStyles()}
        defaultValue={valueYears[0]}
        value={valueYears}
        onChange={(e) => handleYearsChange(e)}
        options={YEARS}
        hideSelectedOptions={true}
        components={{
          DropdownIndicator: chevron,
        }}
      />
      <Select
        styles={selectMenuStyles()}
        placeholder={positionPlaceholer}
        value={valuePositions}
        options={POSITIONS}
        onChange={(e) => {
          handlePositionsChange(e);
        }}
        isClickable={false}
        hideSelectedOptions={true}
        components={{
          DropdownIndicator: chevron,
        }}
      />
    </div>
  );
};

const mapStateToProps = ({ teams, players }) => {
  return { selectedTeam: teams.selectedTeam, players: players };
};

Filters.propTypes = {
  getSelectedTeam: PropTypes.func.isRequired,
  filterPlayers: PropTypes.func.isRequired,
  selectedTeam: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getSelectedTeam, filterPlayers })(
  Filters
);
