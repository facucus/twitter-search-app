import React from 'react';
import PropTypes from 'prop-types';

import UserCard from 'components/UserCard';

const UserList = ( { userList, isLoading } ) => {
  return (
    <div className='user-list'>
      <h3>Users</h3>

      { (!userList.length && !isLoading) &&
        <div>No users found. Please try again.</div> }

      { userList.map( user => (
        <UserCard key={user.id_str} user={user} />
      ) ) }
    </div>
  );
}

UserList.propTypes = {
  userList: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default UserList;
