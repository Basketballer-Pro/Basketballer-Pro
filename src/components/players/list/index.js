import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Overlay from 'components/_shared/overlay';
import Spinner from 'components/_shared/spinner';
import { getSelectedPlayer } from 'actions';

import Card from './card';

import styles from './index.module.scss';

const List = ({
  getSelectedPlayer,
  players,
  filteredPlayers,
  player: {
    details: { personId: selectedPlayerId },
  },
  selectedTeam,
  selectedTeam: { teamId },
  isLoading,
  screenWidth,
  year,
}) => {
  const domRef = useRef();

  useEffect(() => {
    domRef.current.scrollTo(0, 0);
  }, [teamId]);

  const theList = () => {
    if (filteredPlayers) {
      return filteredPlayers;
    } else {
      return players;
    }
  };

  return (
    <div
      ref={domRef}
      className={classnames(styles.container, isLoading && styles.noScroll)}
    >
      <Overlay isLoading={isLoading}>
        <Spinner height={19} width={4} radius={3} isLoading={isLoading} />
      </Overlay>
      {theList().map((player, index) => (
        <Card
          key={index}
          getSelectedPlayer={getSelectedPlayer}
          selectedTeam={selectedTeam}
          selectedPlayerId={selectedPlayerId}
          player={player}
          screenWidth={screenWidth}
          year={year}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({
  player,
  players: { list, isLoading, filteredList },
  teams: { selectedTeam },
  year,
}) => {
  return {
    player,
    players: list,
    filteredPlayers: filteredList,
    isLoading,
    selectedTeam,
    year,
  };
};

List.propTypes = {
  getSelectedPlayer: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
  player: PropTypes.object.isRequired,
  selectedTeam: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  screenWidth: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, { getSelectedPlayer })(List);
