import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import PropTypes, { number } from 'prop-types';

import Chevron from 'assets/icons/chevron';
import { getSelectedTeam } from 'actions';
import { COLORS, YEARS } from 'enums';

import selectMenuStyles from 'components/_shared/selectMenuStyles';
import styles from './filter.module.scss';

const Filter = ({
  dispatch,
  selectedTeam,
  getSelectedTeam,
  array,
  years,
  positions,
  players,
}) => {
  const chevron = () => (
    <Chevron
      color={COLORS.DARK_GREY}
      width={10}
      height={5}
      className={styles.chevron}
    />
  );

  // console.log('props', props);
  // console.log('players', players);

  const { list } = players;

  const handleChange = (e) => {
    if (typeof e.value === 'number') {
      getSelectedTeam(selectedTeam, e.value);
    } else {
      console.log('i fired');
      // const filteredList = list.filter((player) => {
      //   const parsedString = player.teamSitesOnly.posFull.toLowerCase();
      //   // return parsedString === e.value;
      //   return parsedString.includes(e.value);
      dispatch({ type: 'SET_SELECTED_POSITION', payload: e.value });
    }
  };

  return (
    <div className={styles.container}>
      <Select
        styles={selectMenuStyles()}
        // defaultValue={YEARS[0]}
        defaultValue={array[0]}
        // options={YEARS}
        options={array}
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

const mapStateToProps = ({ teams, players, position }) => {
  return { selectedTeam: teams.selectedTeam, players: players };
};

Filter.propTypes = {
  getSelectedTeam: PropTypes.func.isRequired,
  selectedTeam: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  getSelectedTeam,
})(Filter);
