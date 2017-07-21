const initialState = {
  users: [],
  isLoading: false,
  error: ''
}


const usersReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case 'RESET_USERS_STATE':
      return {
        ...initialState,
      };
    case 'FETCHING_USERS':
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case 'FETCHING_USERS_SUCCESS':
      return {
        users: action.users,
        isLoading: false,
        error: ''
      };
    case 'FETCHING_TWEETS_ERROR':
      return {
        ...state,
        isLoading: false,
        error: 'Server error'
      }
    default:
      return state;
  }
}

export default usersReducer;
