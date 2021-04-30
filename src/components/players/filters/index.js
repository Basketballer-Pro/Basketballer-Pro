import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { getSelectedTeam, filterPlayers } from 'actions';
import { YEARS, POSITIONS, COLORS } from 'enums';
import Chevron from 'assets/icons/chevron';
import selectMenuStyles from 'components/_shared/selectMenuStyles';

import styles from './index.module.scss';

const Filters = ({
  getSelectedTeam,
  filterPlayers,
  resetPlayer,
  resetList,
  players: { list },
  selectedTeam,
}) => {
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
    resetPlayer();
    setValuePositions(e);
    if (e) {
      filterPlayers(e.value);
    } else {
      resetList(list);
    }
  };

  return (
    <div className={styles.container}>
      <Select
        styles={selectMenuStyles()}
        defaultValue={valueYears[0]}
        value={valueYears}
        options={YEARS}
        hideSelectedOptions
        isSearchable={false}
        components={{
          DropdownIndicator: chevron,
        }}
        onChange={(e) => handleYearsChange(e)}
      />
      <Select
        styles={selectMenuStyles()}
        placeholder={positionPlaceholer}
        value={valuePositions}
        options={POSITIONS}
        hideSelectedOptions
        isSearchable={false}
        isClearable
        components={{
          DropdownIndicator: chevron,
        }}
        onChange={(e) => {
          handlePositionsChange(e);
        }}
      />
    </div>
  );
};

const mapStateToProps = ({ teams, players }) => {
  return { selectedTeam: teams.selectedTeam, players: players };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetPlayer: () => dispatch({ type: 'RESET_PLAYER' }),
    resetList: (list) => dispatch({ type: 'SET_PLAYERS', payload: list }),
    filterPlayers: bindActionCreators(filterPlayers, dispatch),
    getSelectedTeam: bindActionCreators(getSelectedTeam, dispatch),
  };
};

Filters.propTypes = {
  getSelectedTeam: PropTypes.func.isRequired,
  filterPlayers: PropTypes.func.isRequired,
  resetList: PropTypes.func.isRequired,
  resetPlayer: PropTypes.func.isRequired,
  players: PropTypes.object.isRequired,
  selectedTeam: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
