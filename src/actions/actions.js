import dataNbaNet from '../apis/dataNbaNet';
import { TEAMS } from '../enums/';

export const getTeams = () => async dispatch => {
    const allTeamsResponse = await dataNbaNet.get('/prod/2019/teams_config.json');
    const nbaTeams = Object.values(allTeamsResponse.data.teams.config).filter(team => team.ttsName);
    dispatch({ type: 'GET_TEAMS', payload: nbaTeams });
    
    const defaultTeam = nbaTeams.find(team => team.teamId === TEAMS.TOR.ID); 
    dispatch(getSelectedTeam(defaultTeam));
};

export const getSelectedTeam = team => async dispatch => {
    dispatch({ type: 'GET_SELECTED_TEAM', payload: team });
    dispatch({ type: 'GET_TEAM_COLOR', payload: team.primaryColor });

    const teamUrlName = (team.teamId === TEAMS.PHI.ID ? TEAMS.PHI.NAME : team.ttsName.trim().split(' ').pop().toLowerCase());
    const teamRosterResponse = await dataNbaNet.get(`/json/cms/noseason/team/${teamUrlName}/roster.json`);
    const teamRoster = teamRosterResponse.data.sports_content.roster.players.player.map((player) => {
        return { ...player, teamColor: team.primaryColor };
    });
    dispatch({ type: 'GET_PLAYERS', payload: teamRoster });
};

export const getSelectedPlayer = player => async dispatch => {
    dispatch({ type: 'PRELOAD_PLAYER', payload: player });

    const playerResponse = await dataNbaNet.get(`/prod/v1/2019/players/${player.person_id}_profile.json`);
    dispatch({ type: 'UPDATE_PLAYER', payload: playerResponse.data.league.standard.stats.latest });
    
    const gamesResponse = await dataNbaNet.get(`/data/10s/prod/v1/2019/players/${player.person_id}_gamelog.json`);
    dispatch({ type: 'GET_GAMES', payload: { ...gamesResponse.data.league.standard }});
};