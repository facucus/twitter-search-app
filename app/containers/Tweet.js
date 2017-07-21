import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import Loading from 'components/Loading';
import UserDetails from 'components/UserDetails';
import TweetDetails from 'components/TweetDetails';
import { getTweet, resetTweet } from 'redux/actions/tweet';

class Tweet extends Component {
  componentDidMount() {
    const { tweet, getTweet, location } = this.props;

    if ( !tweet.data.id ) {
      const id = location.pathname.split('/')[2];
      getTweet(id);
    }
  }

  componentWillUnmount() {
    this.props.resetTweet()
  }

  render() {
    const { tweet, isLoading } = this.props;
    const { data } = tweet;
    const { user } = data;
    if ( isLoading ) {
      return (
        <div className='tweet'>
          <Loading />
        </div>
      )
    }
    return (
      <div className='tweet'>
        { data.id &&
          <div className='content'>
            <UserDetails user={ user }/>
            <TweetDetails tweet={ data }/>
          </div> }
          <div className='back-button'>
            <Link to='/'><i className="fa fa-chevron-left" aria-hidden="true"></i>Back</Link>
          </div>
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    tweet: state.tweet
  }
}

export default connect(
  mapStateToProps,
  {
    getTweet,
    resetTweet
  }
)( Tweet );
