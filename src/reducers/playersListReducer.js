const initialState = {
  list: new Array(20).fill({}),
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_PLAYERS':
      return initialState;
    case 'SET_PLAYERS':
      return { list: action.payload, isLoading: false };
    default:
      return state;
  }
};
