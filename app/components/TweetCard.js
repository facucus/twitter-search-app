import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getDiffDate } from 'utils/utils';

class TweetCard extends Component  {
  constructor() {
    super();

    this.onTweetClick = this.onTweetClick.bind( this );
  }

  onTweetClick() {
    const { onTweetClick, tweet } = this.props;
    onTweetClick( tweet );
  }

  render() {
    const { user, text, created_at, id_str } = this.props.tweet;
    const diffDate = getDiffDate( created_at );

    return (
      <div className='tweet-card'>
        <Link
          to={{ pathname: `/tweet/${id_str}`}}
          onClick={ this.onTweetClick }>
          <div className='card-header'>
            <div className='user-info'>
              <img src={ user.profile_image_url }/>
              <span><b>{ user.name }</b></span>
              { user.verified ? <i className='fa fa-check-circle' aria-hidden='true'></i> : <span> - </span> }
              <span>@{ user.screen_name }</span>
            </div>
            <div className='tweet-date'>{ diffDate }</div>
          </div>
          <div className='tweet'>
            { text }
          </div>
        </Link>
      </div>
    )
  }
}

TweetCard.propTypes = {
  tweet: PropTypes.object.isRequired,
}

export default TweetCard;
