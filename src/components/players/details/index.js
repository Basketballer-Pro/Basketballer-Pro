import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Placeholder from './placeholder';
import Card from './card';
import QuickStats from './quickStats';
import RecentGamesStats from './recentGamesStats';
import TotalStats from './totalStats';

import styles from './index.module.scss';

const Details = ({
  player: { details, isLoading },
  teams,
  selectedTeam: { teamId, teamColor },
}) => {
  const ref = useRef();
  const [isSticky, setIsSticky] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isMobilePortrait, setIsMobilePortrait] = useState(null);
  const [isComponentDisplayed, setIsComponentDisplayed] = useState(true);
  const [isPlayerSelected, setIsPlayerSelected] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setIsAnimated(false);
      setIsSticky(false);
      ref.current.scrollTo(0, 0);
    }
  }, [details]);

  const { person_id } = details;

  useEffect(() => {
    setIsPlayerSelected(true);
  }, [person_id]);

  useEffect(() => {
    setIsPlayerSelected(false);
  }, [teamId]);

  const windowWidth = window.innerWidth;

  useEffect(() => {
    if (windowWidth < 521) {
      setIsMobilePortrait(true);
    }

    if (windowWidth > 520) {
      setIsMobilePortrait(false);
    }
  }, [windowWidth]);

  console.log('isPlayerSelected: ', isPlayerSelected);
  console.log('teamId: ', teamId);
  console.log('details.person_id: ', details.person_id);
  console.log('windowWidth :', windowWidth);

  const onScroll = (e) => {
    const breakpointWidth = 1224;
    const scrollHeight = window.innerWidth > breakpointWidth ? 297 : 254;

    setIsAnimated(true);
    setIsSticky(e.target.scrollTop >= scrollHeight);
  };

  const mobilePortrait = window.innerWidth < 521;

  if (!details.person_id) {
    return (
      <div
        className={classnames(
          styles.container
          // isMobilePortrait && styles.hide
        )}
      >
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
    setIsPlayerSelected(false);
  };

  return (
    <div
      onScroll={onScroll}
      ref={ref}
      className={classnames(
        styles.container,
        isLoading && styles.scrollHidden,
        isPlayerSelected && styles.show
      )}
    >
      <button
        style={{ color: `${teamColor}`, borderColor: `${teamColor}` }}
        onClick={() => closeDisplay()}
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
};

export default connect(mapStateToProps)(Details);
