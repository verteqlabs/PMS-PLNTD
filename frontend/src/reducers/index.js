
import auth from 'reducers/auth';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import users from 'reducers/users/usersReducers';

import patients from 'reducers/patients/patientsReducers';

import users from 'reducers/users/usersReducers';

import appointment from 'reducers/appointment/appointmentReducers';

import users from 'reducers/users/usersReducers';

import appointment from 'reducers/appointment/appointmentReducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,

    users,

    patients,

    users,

    appointment,

    users,

    appointment,

  });

