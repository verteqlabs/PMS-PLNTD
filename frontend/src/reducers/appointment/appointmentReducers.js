import list from 'reducers/appointment/appointmentListReducers';
import form from 'reducers/appointment/appointmentFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
