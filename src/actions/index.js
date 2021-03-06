import dataNbaNet from 'apis';
import { TEAMS, TEAM_COLORS, DEFAULT_YEAR } from 'enums';

export const getTeams = (pathname, history) => async (dispatch) => {
  const [defaultTeamName, , defaultPlayerId] = pathname.split('/').slice(1);
  const response = await dataNbaNet.get(`/prod/v1/${DEFAULT_YEAR}/teams.json`);
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
  dispatch(
    getSelectedTeam(defaultTeam, DEFAULT_YEAR, defaultPlayerId, history)
  );
};

export const getSelectedTeam = (team, year, defaultPlayerId, history) => async (
  dispatch
) => {
  // reset players list and details
  dispatch({ type: 'RESET_PLAYERS' });
  dispatch({ type: 'PRELOAD_PLAYER_DETAILS', payload: null });
  // set selected team
  dispatch({ type: 'SET_SELECTED_YEAR', payload: year });
  dispatch({ type: 'SET_SELECTED_TEAM', payload: team });

  const allPlayersResponse = await dataNbaNet.get(
    `/prod/v1/${year}/players.json`
  );
  const allPlayers = allPlayersResponse.data.league.standard;
  const teamRoster = allPlayers.filter((player) => {
    return player.teamId === team.teamId;
  });

  dispatch({ type: 'SET_PLAYERS', payload: teamRoster });
  //set defaultPlayer if optional defaultPlayerId exists
  if (defaultPlayerId) {
    const defaultPlayer = teamRoster.find(
      (player) => player.personId === defaultPlayerId
    );

    if (defaultPlayer) {
      dispatch(getSelectedPlayer(defaultPlayer, year));
    } else {
      //removes invalid defaultPlayerId
      history.push('/');
    }
  }
};

export const getSelectedPlayer = (player, year) => async (dispatch) => {
  dispatch({ type: 'SET_PLAYER_DETAILS_IS_LOADING', payload: true });
  dispatch({ type: 'PRELOAD_PLAYER_DETAILS', payload: player });

  const playerResponse = await dataNbaNet.get(
    `/prod/v1/${year}/players/${player.personId}_profile.json`
  );
  const gamesResponse = await dataNbaNet.get(
    `/data/10s/prod/v1/${year}/players/${player.personId}_gamelog.json`
  );

  dispatch({ type: 'UPDATE_PLAYER_DETAILS', payload: playerResponse });
  dispatch({ type: 'SET_RECENT_GAMES', payload: gamesResponse });
  dispatch({ type: 'SET_PLAYER_DETAILS_IS_LOADING', payload: false });
};
