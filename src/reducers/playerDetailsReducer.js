const initialState = {
  details: {
    recentGames: [],
  },
  isLoading: false,
};

export default (
  state = {
    details: {
      recentGames: [],
    },
    isLoading: false,
  },
  action
) => {
  switch (action.type) {
    case 'RESET_PLAYER':
      return initialState;
    case 'SET_PLAYER_DETAILS_IS_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'PRELOAD_PLAYER_DETAILS':
      return {
        ...state,
        details: {
          recentGames: [],
          ...action.payload,
        },
      };
    case 'UPDATE_PLAYER_DETAILS':
      const {
        latest,
        regularSeason: { season },
      } = action.payload.data.league.standard.stats;
      const currentStats = season.find((item) => item.seasonYear === 2019);
      const payloadDetails = currentStats ? currentStats.total : latest;

      return {
        ...state,
        details: {
          ...state.details,
          ...payloadDetails,
        },
      };
    case 'SET_RECENT_GAMES':
      const { standard: recentGames } = action.payload.data.league;

      return {
        ...state,
        details: {
          ...state.details,
          recentGames,
        },
      };
    default:
      return state;
  }
};
