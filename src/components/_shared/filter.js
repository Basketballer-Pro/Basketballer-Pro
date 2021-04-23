import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import PropTypes, { number } from 'prop-types';

import Chevron from 'assets/icons/chevron';
import { getSelectedTeam, getSelectedPlayer, filterPlayers } from 'actions';
import { COLORS /*YEARS*/ } from 'enums';

import selectMenuStyles from 'components/_shared/selectMenuStyles';
import styles from './filter.module.scss';

const Filter = ({
  selectedTeam,
  getSelectedTeam,
  category,
  players,
  dispatch,
  filterPlayers,
}) => {
  const chevron = () => (
    <Chevron
      color={COLORS.DARK_GREY}
      width={10}
      height={5}
      className={styles.chevron}
    />
  );

  const handleChange = (e) => {
    if (typeof e.value === 'string') {
      console.log('e.value', e.value);
      filterPlayers(e.value);
    } else {
      getSelectedTeam(selectedTeam, e.value);
    }
  };

  const hasPlaceholder = () => {
    if (typeof category[0].value === 'number') {
      return null;
    }
    return 'Position!';
  };

  return (
    <div className={styles.container}>
      <Select
        styles={selectMenuStyles()}
        defaultValue={hasPlaceholder() === null && category[0]}
        placeholder={hasPlaceholder()}
        options={category}
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

// const mapDispatchToProps = (dispatch) => {
//   return dispatch();
// }

Filter.propTypes = {
  getSelectedTeam: PropTypes.func.isRequired,
  selectedTeam: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  /*mapDispatchToProps,*/ { getSelectedTeam, filterPlayers }
)(Filter);
