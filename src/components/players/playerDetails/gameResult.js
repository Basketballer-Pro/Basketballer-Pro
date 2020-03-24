import React from 'react';
import { connect } from 'react-redux';
import styles from './gameResult.module.scss';

const GameResult = ({teams, games}) => {
    const gamesArray = Object.values(games);
    console.log(gamesArray, 'cunt');
    const teamsArray = Object.values(teams);

    const opposingTeamArray = gamesArray.map((game)=> {

        if (game.isHomeGame === false) {
            return { ...game.hTeam, gameDate: game.gameDateUTC, isHomeGame: game.isHomeGame, selectedTeamScore: game.vTeam.score};
        } else {
            return { ...game.vTeam, gameDate: game.gameDateUTC, selectedTeamScore: game.hTeam.score };
        }
    });

    const threeMatchingTeams = (opposingTeamArray, teamsArray) => {
        const finalArray = [];

        teamsArray.map((team)=> {
            opposingTeamArray.map((oppTeam)=> {
                if (oppTeam.teamId === team.teamId) {
                    finalArray.push({...team, score: oppTeam.score, isWinner: oppTeam.isWinner, gameDate: oppTeam.gameDate, isHomeGame: oppTeam.isHomeGame, selectedTeamScore: oppTeam.selectedTeamScore });
                }
                 return null;
            });
        });

        return finalArray;
    };

    const matchingTeamArray = threeMatchingTeams(opposingTeamArray, teamsArray);

    const individualGame = matchingTeamArray.map((game, index)=>{
        console.log(game, 'here yo');
        const { isHomeGame, tricode, ttsName, gameDate, score, isWinner, selectedTeamScore } = game;
        // console.log(gameDate);
        const parsedDate = new Date(gameDate).toDateString();
        // const parsedDate2 = parsedDate.toDateString();
        return (
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    {isHomeGame ? 
                        <div key={index}>vs</div> : 
                        <div key={index}>@</div>
                    }
                    <img src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${tricode}.svg`} height="50" />
                    <div>{ttsName}</div>
                    <div>{parsedDate}</div>
                </div>
                <div className={styles.resultsContainer}>
                    {isWinner ? 
                        <div>L</div> : <div>W</div>
                    }
                    {isWinner ? 
                        <div>{score} - {selectedTeamScore}</div> :
                        <div>{selectedTeamScore} - {score}</div>
                    }
                </div>
                
            </div>
           
        )
    })

    // console.log(individualGame);

    return (
        <div>{individualGame}</div>
        // <div>
        //     {isHomeGame ? <div>@</div> : <div>vs</div>}
        //     <div>{opponentName}</div>
        //     <img src={`https://cdn.nba.net/assets/logos/teams/secondary/web/${tricode}.svg`} />
        //     <div>{date2}</div>
        // </div>
        
    );
    // return <div>Nothing yet</div>;
}

const mapStateToProps = (state) => {
    return { teams: state.teams, games: state.games };
}

export default connect(mapStateToProps)(GameResult);