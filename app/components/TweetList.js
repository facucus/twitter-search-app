import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TweetCard from 'components/TweetCard';
import Loading from 'components/Loading';

class TweetList extends Component {
  render() {
    const { tweetList, isLoading, onTweetClick } = this.props;
    return (
      <div className='tweet-list'>
        <h3>Tweets</h3>
        { (!tweetList.length && !isLoading) &&
          <div>No tweets found. Please try again.</div> }

        { tweetList.map( ( tweet, index ) => (
          <TweetCard key={ tweet.id_str } tweet={ tweet } onTweetClick={ onTweetClick } />
        ) ) }

        { isLoading && <Loading />}
      </div>
    )
  }
}

TweetList.propTypes = {
  tweetList: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  onTweetClick: PropTypes.func.isRequired,
};

export default TweetList;
