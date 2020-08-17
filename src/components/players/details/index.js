import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { resetPlayer } from 'actions';

import Placeholder from './placeholder';
import Card from './card';
import QuickStats from './quickStats';
import RecentGamesStats from './recentGamesStats';
import TotalStats from './totalStats';

import styles from './index.module.scss';

const Details = ({
  size,
  player: { details, isLoading },
  teams,
  selectedTeam: { teamId, teamColor },
  getSelectedPlayer,
}) => {
  const ref = useRef();
  const [isSticky, setIsSticky] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isPlayerSelected, setIsPlayerSelected] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setIsAnimated(false);
      setIsSticky(false);
      ref.current.scrollTo(0, 0);
    }
  }, [details]);

  useEffect(() => {
    setIsPlayerSelected(true);
  }, [isLoading]);

  useEffect(() => {
    setIsPlayerSelected(false);
  }, [teamId]);

  const onScroll = (e) => {
    const breakpointWidth = 1224;
    const scrollHeight = window.innerWidth > breakpointWidth ? 297 : 254;

    setIsAnimated(true);
    setIsSticky(e.target.scrollTop >= scrollHeight);
  };

  if (!details.person_id) {
    return (
      <div className={classnames(styles.container)}>
        <Placeholder />
      </div>
    );
  }

  const {
    assists,
    blocks,
    fgp,
    ftp,
    gamesPlayed,
    min,
    pFouls,
    ppg,
    points,
    totReb,
    rpg,
    steals,
    tpp,
    turnovers,
    recentGames,
  } = details;

  const quickStats = [
    { title: 'ppg', value: ppg },
    { title: 'reb', value: totReb },
    { title: 'ast', value: assists },
    { title: 'fg %', value: fgp },
  ];

  const totalStats = [
    { title: 'gp', value: gamesPlayed },
    { title: 'min', value: min },
    { title: 'fg%', value: fgp },
    { title: '3p%', value: tpp },
    { title: 'ft%', value: ftp },
    { title: 'rpg', value: rpg },
    { title: 'ast', value: assists },
    { title: 'blk', value: blocks },
    { title: 'stl', value: steals },
    { title: 'pf', value: pFouls },
    { title: 'to', value: turnovers },
    { title: 'pts', value: points },
  ];

  const closeDisplay = () => {
    console.log('closeDisplay');
    setIsPlayerSelected(false);
    resetPlayer();
  };

  return (
    <div
      onScroll={onScroll}
      ref={ref}
      className={classnames(
        styles.container,
        isLoading && styles.scrollHidden,
        size <= 520 && isPlayerSelected && styles.mobileDisplay
      )}
    >
      <button
        style={{ color: `${teamColor}`, borderColor: `${teamColor}` }}
        onClick={() => {
          closeDisplay();
        }}
        className={styles.mobileButton}
      >
        X
      </button>
      <Card
        player={details}
        playerTeamId={teamId}
        teamColor={teamColor}
        isSticky={isSticky}
        isAnimated={isAnimated}
      />
      <QuickStats
        quickStats={quickStats}
        teamColor={teamColor}
        isLoading={isLoading}
      />
      <TotalStats
        totalStats={totalStats}
        teamColor={teamColor}
        isLoading={isLoading}
      />
      <RecentGamesStats
        teams={teams}
        teamColor={teamColor}
        recentGamesStats={recentGames}
        isLoading={isLoading}
      />
    </div>
  );
};

const mapStateToProps = ({ player, teams: { teams, selectedTeam } }) => ({
  player,
  teams,
  selectedTeam,
});

Details.propTypes = {
  player: PropTypes.object.isRequired,
  teams: PropTypes.array.isRequired,
  selectedTeam: PropTypes.object.isRequired,
  size: PropTypes.number,
};

Details.defaultProps = {
  size: null,
};

export default connect(mapStateToProps)(Details);
