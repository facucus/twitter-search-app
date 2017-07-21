import { combineReducers } from 'redux';

import tweetsReducer from './tweetsReducer';
import usersReducer from './usersReducer';
import tweetReducer from './tweetReducer';

const rootReducer = combineReducers( {
  tweetList: tweetsReducer,
  userList: usersReducer,
  tweet: tweetReducer,
} );

export default rootReducer;
