import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import * as Logos from 'assets/icons/logos';
import Chevron from 'assets/icons/chevron';

import { getSelectedTeam } from 'actions';

import selectMenuStyles from './selectMenuStyles';
import styles from './dropdownMenu.module.scss';

const DropdownMenu = ({ teams, selectedTeam, getSelectedTeam, history }) => {
  const { teamId: selectedTeamId, teamColor } = selectedTeam;
  const chevron = () => <Chevron color={'white'} className={styles.chevron} />;

  const renderItem = (
    { data: { teamColor, fullName, tricode, teamId }, innerProps },
    isSingleValue
  ) => {
    const TeamLogo = Logos[tricode];
    const isSelected = selectedTeamId === teamId;
    const isDisplayed = isSingleValue || (!isSingleValue && !isSelected);

    return (
      isDisplayed && (
        <div
          style={{ backgroundColor: teamColor }}
          className={classnames(
            styles.optionContainer,
            isSingleValue && styles.hasNoBorder
          )}
          {...innerProps}
        >
          <div className={styles.optionImgContainer}>
            <TeamLogo />
          </div>
          <div className={styles.optionTitle}>{fullName}</div>
        </div>
      )
    );
  };

  return (
    <div
      style={{ backgroundColor: teamColor }}
      className={styles.teamContainer}
    >
      <Select
        styles={selectMenuStyles()}
        options={teams}
        value={teams.find((team) => team.teamId === selectedTeamId)}
        isSearchable={false}
        placeholder={false}
        components={{
          DropdownIndicator: chevron,
          Option: (props) => renderItem(props, false),
          SingleValue: (props) => renderItem(props, true),
        }}
        onChange={(team) => {
          history.push(`/${team.urlName}/players`);
          getSelectedTeam(team);
        }}
      />
      <div
        style={{
          borderColor: `${teamColor} transparent transparent transparent`,
        }}
        className={styles.borderTriangle}
      />
    </div>
  );
};

const mapStateToProps = ({ teams: { teams, selectedTeam } }) => {
  return {
    teams,
    selectedTeam,
  };
};

DropdownMenu.propTypes = {
  getSelectedTeam: PropTypes.func.isRequired,
  teams: PropTypes.array.isRequired,
  selectedTeam: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getSelectedTeam })(
  withRouter(DropdownMenu)
);
