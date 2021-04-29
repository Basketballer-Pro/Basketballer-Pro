import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Chevron from 'assets/icons/chevron';
import { getSelectedTeam, filterPlayers } from 'actions';
import { COLORS } from 'enums';

import selectMenuStyles from 'components/_shared/selectMenuStyles';
import styles from './filter.module.scss';

const Filter = ({
  selectedTeam,
  getSelectedTeam,
  category,
  filterPlayers,
  update,
  menuHasChanged,
  typeOfMenu,
  color1,
  color2,
}) => {
  const [catPlaceholder, setPlaceholder] = useState('Position');
  // const [menuHasChanged, setMenuHasChanged] = useState(false);
  // const [update, setUpdate] = useState(false);
  const [menuHasChanged2, setMenuHasChanged2] = useState(menuHasChanged);
  const [stateHasChanged, setNewState] = useState(false);
  const [positionsPlaceholder, setPosPlaceholder] = useState('Cat');
  const isNumber = typeof category[0].value === 'number';
  // console.log('men has changed', menuHasChanged);

  useEffect(() => {
    console.log('state has changed', stateHasChanged);
    setPosPlaceholder('Positions');
  }, [stateHasChanged]);

  const chevron = () => (
    <Chevron
      color={COLORS.DARK_GREY}
      width={10}
      height={5}
      className={styles.chevron}
    />
  );

  const handleChange = (e) => {
    // update();
    setNewState(true);
    if (typeof e.value === 'string') {
      setPlaceholder(null);
      filterPlayers(e.value);
    } else {
      update();
      // console.log('i fired');
      // setPosPlaceholder('Jump');
      // setMenuHasChanged(true);
      getSelectedTeam(selectedTeam, e.value);
    }
  };

  const defaultValuePlaceholder = (typeOfMenu) => {
    if (typeOfMenu === 'years') {
      return category[0];
    }

    if (typeOfMenu === 'position') {
      return null;
    }
  };

  const placeholderPlaceholder = (typeOfMenu) => {
    if (typeOfMenu === 'years') {
      return null;
    }

    if (typeOfMenu === 'position') {
      if (menuHasChanged === true) {
        return '2';
      }
      return '1';
    }
  };

  return (
    <div
      className={
        (styles.container,
        classnames(styles.container, menuHasChanged && styles.fuck))
      }
    >
      <Select
        styles={selectMenuStyles()}
        // value={'sick a dicks'}
        // defaultValue={isNumber ? category[0] : catPlaceholder}
        // defaultValue={typeOfMenu === 'years' ? category[0] : null}
        defaultValue={defaultValuePlaceholder(typeOfMenu)}
        placeholder={stateHasChanged ? 'jojo' : positionsPlaceholder}
        // placeholder={placeholderPlaceholder(typeOfMenu)}
        // clearValue={() => void();}
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
