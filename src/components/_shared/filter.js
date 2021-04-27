import React, { useState } from 'react';
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
  filterPlayers,
}) => {
  const [hasPlaceholder, setPlaceholder] = useState('Position');

  console.log('cat', category);

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
      setPlaceholder(null);
      filterPlayers(e.value);
    } else {
      setPlaceholder('Position');
      getSelectedTeam(selectedTeam, e.value);
    }
  };

  const numberCat = typeof category[0].value === 'number';
  console.log('cat type', numberCat);

  return (
    <div className={styles.container}>
      <Select
        styles={selectMenuStyles()}
        defaultValue={numberCat ? category[0] : hasPlaceholder}
        placeholder={hasPlaceholder}
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

Filter.propTypes = {
  getSelectedTeam: PropTypes.func.isRequired,
  selectedTeam: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getSelectedTeam, filterPlayers })(
  Filter
);
