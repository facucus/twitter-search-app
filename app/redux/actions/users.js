import api from 'utils/api';

function fetchingUsers() {
  return {
    type: 'FETCHING_USERS'
  };
}

function fetchingUsersSuccess( data ) {
  return {
    type: 'FETCHING_USERS_SUCCESS',
    users: data.users
  };
}

function fetchingUsersError() {
  return {
    type: 'FETCHING_USERS_ERROR'
  };
}

export function resetUsersState() {
  return ( dispatch ) => dispatch(
    { type: 'RESET_USERS_STATE' }
  );
}

export function getUserList( search ) {
  return ( dispatch ) => {
    dispatch( fetchingUsers() );
    api.getUsers( search )
      .then( users => dispatch( fetchingUsersSuccess( users ) ) )
      .catch( err => dispatch( fetchingUsersError() ) );
  }
}
