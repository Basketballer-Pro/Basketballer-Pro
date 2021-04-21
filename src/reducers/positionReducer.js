// import { DEFAULT_YEAR } from 'enums';

export default (state = null, action) => {
  switch (action.type) {
    case 'SET_SELECTED_POSITION':
      console.log('i fired');
      console.log('action.payload', action.payload);
      return action.payload;
    default:
      return state;
  }
};
