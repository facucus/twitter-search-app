import React from 'react';
import PropTypes from 'prop-types';

import { formatNumber } from 'utils/utils';

const UserDetails = ( { user } ) => {
  return (
    <div className='user-details'>
      <div className='user-bg' style={{ backgroundColor: `#${user.profile_background_color}`}}>
        <img src={ user.profile_background_image_url }/>
      </div>

      <div className='user-profile'>
        <img src={ user.profile_image_url }/>

        <div className='user-name'>
          <span>{ user.name }</span>
          { user.verified ? <i className='fa fa-check-circle' aria-hidden='true'></i> : <span> - </span>}
          <span>@{ user.screen_name }</span>
        </div>

        <div className='user-description'>
          { user.description }
        </div>
      </div>

      <div className='account-info'>
        <span>Tweets: { formatNumber(user.statuses_count) }</span>
        <span>Following: { formatNumber(user.friends_count) }</span>
        <span>Followers: { formatNumber(user.followers_count) }</span>
      </div>
    </div>
  )
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    profile_background_color: PropTypes.string,
    profile_background_image_url: PropTypes.string,
    profile_image_url: PropTypes.string,
    name: PropTypes.string,
    verified: PropTypes.bool,
    screen_name: PropTypes.string,
    description: PropTypes.string,
    statuses_count: PropTypes.number,
    friends_count: PropTypes.number,
    followers_count: PropTypes.number
  }).isRequired,
}

export default UserDetails;
