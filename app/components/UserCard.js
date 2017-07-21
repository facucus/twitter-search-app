import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ( props ) => {
  const { id_str, profile_image_url, name, screen_name,
    statuses_count, friends_count, followers_count, verified } = props.user;
  return (
    <div className='user-card'>
      <img src={profile_image_url}/>
      <div className='user-info'>
        <b>{ name } { verified && <i className='fa fa-check-circle' aria-hidden='true'></i> }</b>
        <span>{ `@${screen_name}` }</span>
        <span>{ `Following: ${friends_count} - Followers: ${followers_count}`}</span>
        <a href={`https://twitter.com/${screen_name}`} target='_blank'>View profile</a>
      </div>
    </div>
  )
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserCard;
