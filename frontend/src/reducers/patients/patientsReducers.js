import list from 'reducers/patients/patientsListReducers';
import form from 'reducers/patients/patientsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
