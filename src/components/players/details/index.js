import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Close from 'assets/icons/close';

import Placeholder from './placeholder';
import Card from './card';
import QuickStats from './quickStats';
import RecentGamesStats from './recentGamesStats';
import TotalStats from './totalStats';

import styles from './index.module.scss';

const Details = ({
  dispatch,
  teams,
  history,
  player: { details, isLoading },
  selectedTeam: { teamId, teamColor, urlName },
  screenWidth,
  year,
}) => {
  const ref = useRef();
  const [isSticky, setIsSticky] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setIsAnimated(false);
      setIsSticky(false);
      ref.current.scrollTo(0, 0);
    }
  }, [details]);

  const onScroll = (e) => {
    const breakpointWidth = 1224;
    const scrollHeight = window.innerWidth > breakpointWidth ? 297 : 254;

    setIsAnimated(true);
    setIsSticky(e.target.scrollTop >= scrollHeight);
  };

  if (!details.personId) {
    return (
      <div className={styles.container}>
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

  return (
    <div
      onScroll={onScroll}
      ref={ref}
      className={classnames(
        styles.container,
        isLoading && styles.scrollHidden,
        screenWidth <= 520 && styles.portraitDisplay
      )}
    >
      <button
        onClick={() => {
          dispatch({ type: 'RESET_PLAYER' });
          history.push(`/${urlName}/players`);
        }}
        className={classnames(
          styles.portraitButton,
          isAnimated && styles.positionFixed
        )}
      >
        <Close />
      </button>
      <Card
        player={details}
        playerTeamId={teamId}
        teamColor={teamColor}
        year={year}
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

const mapStateToProps = ({ player, teams: { teams, selectedTeam }, year }) => ({
  player,
  teams,
  selectedTeam,
  year,
});

Details.propTypes = {
  dispatch: PropTypes.func.isRequired,
  teams: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  player: PropTypes.object.isRequired,
  selectedTeam: PropTypes.object.isRequired,
  screenWidth: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(withRouter(Details));
