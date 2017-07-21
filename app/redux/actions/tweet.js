import api from 'utils/api';

function fetchingTweet() {
  return {
    type: 'FETCHING_TWEET'
  };
}

function fetchingTweetSuccess( tweet ) {
  return {
    type: 'FETCHING_TWEET_SUCCESS',
    tweet
  };
}

function fetchingTweetError() {
  return {
    type: 'FETCHING_TWEET_ERROR'
  };
}

export function resetTweet() {
  return ( dispatch ) => dispatch(
    { type: 'RESET_TWEET' }
  )
}

export function getTweet( id, tweet = {} ) {
  return ( dispatch ) => {
    dispatch( fetchingTweet() );
    if ( !id ) return dispatch( fetchingTweetSuccess( tweet ) );
    api.getTweet( id )
      .then( data => dispatch( fetchingTweetSuccess( data.tweet ) ) )
      .catch( err => dispatch( fetchingTweetError() ) );
  }
}
