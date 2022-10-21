import auth from 'reducers/auth';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import users from 'reducers/users/usersReducers';

import patients from 'reducers/patients/patientsReducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,

    users,

    patients,
  });
