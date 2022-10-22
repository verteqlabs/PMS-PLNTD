import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { showSnackbar } from '../../components/Snackbar';

const actions = {
  doNew: () => {
    return {
      type: 'PATIENTS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'PATIENTS_FORM_FIND_STARTED',
      });

      axios.get(`/patients/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'PATIENTS_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'PATIENTS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/patients'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'PATIENTS_FORM_CREATE_STARTED',
      });

      axios.post('/patients', { data: values }).then(res => {
        dispatch({
          type: 'PATIENTS_FORM_CREATE_SUCCESS',
        });
        showSnackbar({ type: 'success', message: 'Patients created' });
        dispatch(push('/admin/patients'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'PATIENTS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'PATIENTS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/patients/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'PATIENTS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        showSnackbar({ type: 'success', message: 'Profile updated' });
      } else {
        showSnackbar({ type: 'success', message: 'Patients updated' });
        dispatch(push('/admin/patients'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'PATIENTS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
