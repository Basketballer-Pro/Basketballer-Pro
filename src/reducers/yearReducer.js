export default (state = 2019, action) => {
  switch (action.type) {
    case 'SET_SELECTED_YEAR':
      return action.payload;
    default:
      return state;
  }
};
