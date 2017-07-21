const initialState = {
  tweets: [],
  lastTweetId: '',
  lastSearch: '',
  latestSearches: [],
  moreTweetsToLoad: false,
  isLoading: false,
  error: ''
}

const latestSearch = ( state, action ) => {
  switch (action.type) {
    case 'FETCHING_TWEETS_SUCCESS':
      if ( state.indexOf( action.search ) !== -1 ) {
        return state;
      }
      if ( state.length < 3 ) {
        return [...state, action.search]
      }
      return state.filter( ( s, index ) => index !== 0 ).concat( action.search );
    default:
      return state;
  }
}

const tweetsReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case 'RESET_TWEETS_STATE':
      return {
        ...initialState,
        latestSearches: state.latestSearches,
      };
    case 'FETCHING_TWEETS':
      return {
        ...state,
        isLoading: true,
      }
    case 'FETCHING_TWEETS_SUCCESS':
      return {
        tweets: state.tweets.concat(action.tweets),
        lastTweetId: action.lastTweetId,
        lastSearch: action.search,
        latestSearches: latestSearch( state.latestSearches, action ),
        moreTweetsToLoad: action.moreTweetsToLoad,
        isLoading: false,
        error: ''
      }
    case 'FETCHING_TWEETS_ERROR':
      return {
        ...state,
        isLoading: false,
        error: 'Server error',
      }
    default:
      return state;
  }
}

export default tweetsReducer;
