const initialState = {
  list: new Array(20).fill({}),
  filteredList: [],
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_PLAYERS':
      return initialState;
    case 'SET_PLAYERS':
      return { list: action.payload, isLoading: false };
    case 'FILTER_PLAYERS':
      console.log('state', state);
      console.log('state.list', state.list);
      return {
        ...state,
        filteredList: state.list.filter((obj) => obj.pos === action.payload),
      };
    default:
      return state;
  }
};
