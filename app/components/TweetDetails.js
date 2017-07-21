import React from 'react';
import PropTypes from 'prop-types';

import { getDiffDate, formatNumber } from 'utils/utils';


const TweetDetails = ( { tweet } ) => {
  return (
    <div className='tweet-details'>
      <div className='tweet-date'>{ getDiffDate(tweet.created_at) }</div>
      <div className='tweet-text'>{ tweet.text }</div>
      <div className='tweet-info'>
        <span>
          <i className='fa fa-retweet' aria-hidden='true'></i> { formatNumber(tweet.retweet_count) }
        </span>
        <span>
          <i className='fa fa-heart-o' aria-hidden='true'></i> { formatNumber(tweet.favorite_count) }
        </span>
      </div>
    </div>
  )
}

TweetDetails.propTypes = {
  tweet: PropTypes.shape({
    created_at: PropTypes.string,
    text: PropTypes.string,
    retweet_count: PropTypes.number,
    favorite_count: PropTypes.number
  }).isRequired,
}

export default TweetDetails;
