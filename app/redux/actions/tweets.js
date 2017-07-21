import api from 'utils/api';
import queryString from 'query-string';

function fetchingTweets() {
  return {
    type: 'FETCHING_TWEETS'
  };
}

function fetchingTweetsSuccess( data, search ) {
  const nextResults = data.tweets.search_metadata.next_results;
  const nextId = queryString.parse(nextResults);
  return {
    type: 'FETCHING_TWEETS_SUCCESS',
    tweets: data.tweets.statuses,
    search,
    moreTweetsToLoad: Boolean(nextResults),
    lastTweetId: nextId.max_id
  };
}

function fetchingTweetsError() {
  return {
    type: 'FETCHING_TWEETS_ERROR'
  };
}

export function resetTweetsState() {
  return ( dispatch ) => dispatch(
    { type: 'RESET_TWEETS_STATE' }
  );
}

export function getTweetList( search, max_id ) {
  return ( dispatch ) => {
    dispatch( fetchingTweets() );
    api.getTweets( search, max_id )
      .then( tweets => dispatch( fetchingTweetsSuccess(tweets, search) ) )
      .catch( err => dispatch( fetchingTweetsError() ) );
  }
}
