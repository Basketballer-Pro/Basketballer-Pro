import React from 'react';
import { connect } from 'react-redux';

import Placeholder from './placeholder/placeholder.js';
import Card from '../_shared/card';
import QuickStats from './quickStats/';
import RecentGamesStats from './recentGamesStats/index.js';
import TotalStats from './totalStats';

import styles from './index.module.scss';

const Details = ({ player, teams, selectedTeam, games }) => {
    if (!player) {
        return (
            <div className={styles.container}>
                <Placeholder />
            </div>
        );
    };

    // console.log(player);
    // console.log(teams);
    // console.log(selectedTeam);


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
    } = player;

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
        <div className={styles.container}>
            <Card player={player} playerTeam={selectedTeam.teamId} />
            <QuickStats quickStats={quickStats} />
            <TotalStats totalStats={totalStats} />
            <RecentGamesStats teams={teams} recentGamesStats={games} />
        </div>
    );
};

const mapStateToProps = state => ({ 
    player: state.player, 
    teams: state.teams,
    selectedTeam: state.selectedTeam, 
    games: state.games, 
});

export default connect(mapStateToProps)(Details);
