import React from 'react';
import PropTypes from 'prop-types';

import * as TeamLogos from 'assets/icons/logos';

import Spinner from 'components/_shared/spinner';
import Title from 'components/_shared/title';
import Table from 'components/_shared/table';

import styles from './index.module.scss';

const RecentGamesStats = ({
  teams,
  teamColor,
  recentGamesStats,
  isLoading,
}) => {
  const teamsArray = Object.values(teams);

  const recentGames = recentGamesStats.map(
    ({ gameId, isHomeGame, hTeam, vTeam, gameDateUTC, stats }) => {
      const { points, assists, offReb, defReb, totReb } = stats;

      const getGameResult = () => {
        const playersTeam = isHomeGame ? hTeam : vTeam;
        return playersTeam.isWinner ? 'W' : 'L';
      };

      const oppTeam = teamsArray.find((team) => {
        const oppTeamId = isHomeGame ? vTeam.teamId : hTeam.teamId;
        return team.teamId === oppTeamId;
      });

      const OppTeamLogo = TeamLogos[oppTeam.tricode];

      const score =
        parseInt(hTeam.score) > parseInt(vTeam.score)
          ? `${hTeam.score} - ${vTeam.score}`
          : `${vTeam.score} - ${hTeam.score}`;

      const formatUTCDate = (gameDateUTC) => {
        const parsedArray = new Date(gameDateUTC).toDateString().split(' ');
        const el = parsedArray[2];

        return el.charAt(0) === '0'
          ? `${parsedArray[0]}. ${parsedArray[1]} ${el.substring(1)}, ${
              parsedArray[3]
            }`
          : `${parsedArray[0]}. ${parsedArray[1]} ${el}, ${parsedArray[3]}`;
      };

      const tableArray = [
        { title: 'result', value: score },
        { title: 'points', value: points },
        { title: 'assists', value: assists },
        { title: 'off reb', value: offReb },
        { title: 'def reb', value: defReb },
        { title: 'tot reb', value: totReb },
      ];

      return (
        <div key={gameId} className={styles.game}>
          <header>
            <div>{isHomeGame ? 'vs' : '@'}</div>
            <div className={styles.logo}>
              <OppTeamLogo />
            </div>
            <div>{oppTeam.fullName}</div>
            <div style={{ color: teamColor }} className={styles.date}>
              {formatUTCDate(gameDateUTC)}
            </div>
          </header>
          <div className={styles.line} />
          <Table array={tableArray} result={getGameResult()} />
        </div>
      );
    }
  );

  const games = !!recentGames.length ? (
    recentGames
  ) : (
    <div className={styles.invalid}>No games available</div>
  );

  return (
    <section className={styles.recentGames}>
      <Title title="recent games" teamColor={teamColor} isRecentGames />
      {isLoading ? <Spinner isLoading={isLoading} /> : games}
    </section>
  );
};

RecentGamesStats.propTypes = {
  teams: PropTypes.array.isRequired,
  teamColor: PropTypes.string.isRequired,
  recentGamesStats: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default RecentGamesStats;
