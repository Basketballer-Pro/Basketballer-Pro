import { combineReducers } from 'redux';
import playersListReducer from './playersListReducer';
import teamsReducer from './teamsReducer';
import playerDetailsReducer from './playerDetailsReducer';
import yearReducer from './yearReducer';
import positionReducer from './positionReducer';

export default combineReducers({
  players: playersListReducer,
  player: playerDetailsReducer,
  teams: teamsReducer,
  year: yearReducer,
  position: positionReducer,
});
