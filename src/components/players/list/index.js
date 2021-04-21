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
  player: {
    details: { personId: selectedPlayerId },
  },
  selectedTeam,
  selectedTeam: { teamId },
  isLoading,
  screenWidth,
  year,
  position,
}) => {
  const domRef = useRef();

  console.log('position', position);

  useEffect(() => {
    domRef.current.scrollTo(0, 0);
  }, [teamId]);

  return (
    <div
      ref={domRef}
      className={classnames(styles.container, isLoading && styles.noScroll)}
    >
      <Overlay isLoading={isLoading}>
        <Spinner height={19} width={4} radius={3} isLoading={isLoading} />
      </Overlay>
      {players.map((player, index) => (
        <Card
          key={index}
          getSelectedPlayer={getSelectedPlayer}
          selectedTeam={selectedTeam}
          selectedPlayerId={selectedPlayerId}
          player={player}
          screenWidth={screenWidth}
          year={year}
          position={position}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({
  player,
  players: { list, isLoading },
  teams: { selectedTeam },
  year,
  position,
}) => {
  return { player, players: list, isLoading, selectedTeam, year, position };
};

List.propTypes = {
  getSelectedPlayer: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
  position: PropTypes.array.isRequired,
  player: PropTypes.object.isRequired,
  selectedTeam: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  screenWidth: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, { getSelectedPlayer })(List);
