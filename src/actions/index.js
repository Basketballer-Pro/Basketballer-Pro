import dataNbaNet from 'apis';
import { TEAMS, TEAM_COLORS } from 'enums';

const resetPlayers = new Array(20).fill({});

export const getTeams = (pathname, history) => async (dispatch) => {
  dispatch({ type: 'SET_PLAYERS', payload: resetPlayers });

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

export const getSelectedTeam = (team, defaultPlayerId, history) => async (dispatch) => {
  // reset players list and details
  dispatch({ type: 'SET_PLAYERS', payload: resetPlayers });
  dispatch({ type: 'PRELOAD_PLAYER_DETAILS', payload: null });

  // set selected team
  dispatch({ type: 'SET_SELECTED_TEAM', payload: team });

  const teamRosterResponse = await dataNbaNet.get(`/json/cms/noseason/team/${team.urlName}/roster.json`);
  const teamRoster = teamRosterResponse.data.sports_content.roster.players.player;
  dispatch({ type: 'SET_PLAYERS', payload: teamRoster });

  // set defaultPlayer if optional defaultPlayerId exists
  if (defaultPlayerId) {
    const defaultPlayer = teamRoster.find((player) => player.person_id === defaultPlayerId);

    if (defaultPlayer) {
      dispatch(getSelectedPlayer(defaultPlayer));
    } else {
      //removes invalid defaultPlayerId
      history.push('/');
    }
  }
};

export const getSelectedPlayer = (player) => async (dispatch) => {
  dispatch({ type: 'SET_PLAYER_DETAILS_IS_LOADING', payload: true });
  dispatch({ type: 'PRELOAD_PLAYER_DETAILS', payload: player });

  const playerResponse = await dataNbaNet.get(`/prod/v1/2019/players/${player.person_id}_profile.json`);
  const gamesResponse = await dataNbaNet.get(`/data/10s/prod/v1/2019/players/${player.person_id}_gamelog.json`);
  dispatch({ type: 'UPDATE_PLAYER_DETAILS', payload: playerResponse.data.league.standard.stats.latest });
  dispatch({ type: 'SET_RECENT_GAMES', payload: gamesResponse.data.league.standard });
  dispatch({ type: 'SET_PLAYER_DETAILS_IS_LOADING', payload: false });
};
