import { DEFAULT_YEAR } from 'enums';

export default (state = DEFAULT_YEAR, action) => {
  switch (action.type) {
    case 'SET_SELECTED_YEAR':
      return action.payload;
    default:
      return state;
  }
};
