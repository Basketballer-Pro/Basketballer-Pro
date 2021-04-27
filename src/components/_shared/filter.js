import React, { useState } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Chevron from 'assets/icons/chevron';
import { getSelectedTeam, filterPlayers } from 'actions';
import { COLORS } from 'enums';

import selectMenuStyles from 'components/_shared/selectMenuStyles';
import styles from './filter.module.scss';

const Filter = ({ selectedTeam, getSelectedTeam, category, filterPlayers }) => {
  const [catPlaceholder, setPlaceholder] = useState('Position');
  const isNumber = typeof category[0].value === 'number';

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
      setPlaceholder(null);
      filterPlayers(e.value);
    } else {
      setPlaceholder('Position');
      getSelectedTeam(selectedTeam, e.value);
    }
  };

  return (
    <div className={styles.container}>
      <Select
        styles={selectMenuStyles()}
        defaultValue={isNumber ? category[0] : catPlaceholder}
        placeholder={catPlaceholder}
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
  filterPlayers: PropTypes.func.isRequired,
  selectedTeam: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getSelectedTeam, filterPlayers })(
  Filter
);
