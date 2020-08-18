import dataNbaNet from 'apis';
import { TEAMS, TEAM_COLORS } from 'enums';
import playerDetailsReducer from 'reducers/playerDetailsReducer';
import { TOR } from 'assets/icons/logos';

export const getTeams = (pathname, history) => async (dispatch) => {
  const [defaultTeamName, , defaultPlayerId] = pathname.split('/').slice(1);
  const response = await dataNbaNet.get('/prod/v1/2019/teams.json');
  const nbaTeams = Object.values(response.data.league.standard)
    .filter((team) => team.isNBAFranchise)
    .map((team) => ({
      ...team,
      teamColor: TEAM_COLORS[team.tricode],
    }));

  dispatch({ type: 'SET_TEAMS', payload: nbaTeams });
  const defaultTeam =
    nbaTeams.find((team) => team.urlName === defaultTeamName) ||
    nbaTeams.find((team) => team.urlName === TEAMS.TOR.NAME);

  dispatch(getSelectedTeam(defaultTeam, defaultPlayerId, history));
};

export const getSelectedTeam = (team, defaultPlayerId, history, year) => async (
  dispatch
) => {
  // reset players list and details
  dispatch({ type: 'RESET_PLAYERS' });
  dispatch({ type: 'PRELOAD_PLAYER_DETAILS', payload: null });

  console.log('team :', team);

  // set selected team
  dispatch({ type: 'SET_SELECTED_TEAM', payload: team });

  // const teamRosterResponse = await dataNbaNet.get(
  //   `/json/cms/noseason/team/${team.urlName}/roster.json`
  // );

  const allPlayersResponse = await dataNbaNet.get(
    `/prod/v1/${year || '2018'}/players.json`
  );
  // console.log('all players', allPlayersResponse.data.league.standard);
  // need to filter by nba

  const allPlayers = allPlayersResponse.data.league.standard;
  // console.log('all basketball players', allPlayers);

  const singleTeamRosterResponse = await dataNbaNet.get(
    `/prod/v1/${year || '2018'}/teams/${TEAMS.TOR.ID}/roster.json`
  );

  const singleTeamRoster =
    singleTeamRosterResponse.data.league.standard.players;

  // console.log('single team roster :', singleTeamRoster);
  const teamRoster = allPlayers.filter((playerObj) => {
    return playerObj.teamId === TEAMS.TOR.ID;
  });

  // const
  // prod/v1/{year}/teams/{teamId}/roster.json>`

  // const teamRoster =
  //   teamRosterResponse.data.sports_content.roster.players.player;
  dispatch({ type: 'SET_PLAYERS', payload: teamRoster });

  //set defaultPlayer if optional defaultPlayerId exists
  if (defaultPlayerId) {
    const defaultPlayer = teamRoster.find(
      (player) => player.personId === defaultPlayerId
    );

    if (defaultPlayer) {
      dispatch(getSelectedPlayer(defaultPlayer));
    } else {
      //removes invalid defaultPlayerId
      history.push('/');
    }
  }
};

// were gonna need to know the player id number, and year
export const getSelectedPlayer = (player) => async (dispatch) => {
  dispatch({ type: 'SET_PLAYER_DETAILS_IS_LOADING', payload: true });
  dispatch({ type: 'PRELOAD_PLAYER_DETAILS', payload: player });

  console.log('here', player);
  console.log('position', player.teamSitesOnly.posFull);

  const playerResponse = await dataNbaNet.get(
    `/prod/v1/2018/players/${player.personId}_profile.json`
  );
  const gamesResponse = await dataNbaNet.get(
    `/data/10s/prod/v1/2018/players/${player.personId}_gamelog.json`
  );

  dispatch({ type: 'UPDATE_PLAYER_DETAILS', payload: playerResponse });
  dispatch({ type: 'SET_RECENT_GAMES', payload: gamesResponse });
  dispatch({ type: 'SET_PLAYER_DETAILS_IS_LOADING', payload: false });
};
