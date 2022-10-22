import { Formik } from 'formik';
import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Loader from 'components/Loader';
// eslint-disable-next-line no-unused-vars
import InputFormItem from 'components/FormItems/items/InputFormItem';
// eslint-disable-next-line no-unused-vars
import SwitchFormItem from 'components/FormItems/items/SwitchFormItem';
// eslint-disable-next-line no-unused-vars
import RadioFormItem from 'components/FormItems/items/RadioFormItem';
// eslint-disable-next-line no-unused-vars
import SelectFormItem from 'components/FormItems/items/SelectFormItem';
// eslint-disable-next-line no-unused-vars
import DatePickerFormItem from 'components/FormItems/items/DatePickerFormItem';
// eslint-disable-next-line no-unused-vars
import ImagesFormItem from 'components/FormItems/items/ImagesFormItem';
// eslint-disable-next-line no-unused-vars
import FilesFormItem from 'components/FormItems/items/FilesFormItem';
// eslint-disable-next-line no-unused-vars

import patientsFields from 'pages/CRUD/Patients/helpers/patientsFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const PatientsForm = (props) => {

  const {
  isEditing,
  isProfile,
  findLoading,
  saveLoading,
  record,
  onSubmit,
  onCancel,
  modal
  } = props;

  const iniValues = () => {
  return IniValues(patientsFields, record || {});
  }

  const formValidations = () => {
  return FormValidations(patientsFields, record || {});
  }

  const handleSubmit = (values) => {
  const { id, ...data } = PreparedValues(patientsFields, values || {});
  onSubmit(id, data);
  };

  const title = () => {
  if(isProfile) {
  return 'Edit My Profile';
  }

  return isEditing
  ? 'Edit Patients'
  : 'Add Patients';
  };

  const renderForm = () => (
  <Widget title={<h4>{title()}</h4>} collapse close>
  <Formik
          onSubmit={handleSubmit}
  initialValues={iniValues()}
  validationSchema={formValidations()}
  >
  {(form) => (
  <form onSubmit={form.handleSubmit}>
    <Grid container spacing={3} direction="column">

      <Grid item>
        <InputFormItem
          name={'first_name'}
          schema={patientsFields}

            autoFocus

        />
      </Grid>

      <Grid item>
        <InputFormItem
          name={'last_name'}
          schema={patientsFields}

        />
      </Grid>

      <Grid item>
        <InputFormItem
          name={'date_of_birth'}
          schema={patientsFields}

        />
      </Grid>

      <Grid item>
        <InputFormItem
          name={'email'}
          schema={patientsFields}

        />
      </Grid>

      <Grid item>
        <InputFormItem
          name={'gender'}
          schema={patientsFields}

        />
      </Grid>

      <Grid item>
        <InputFormItem
          name={'residential_suburb'}
          schema={patientsFields}

        />
      </Grid>

      <Grid item>
        <RadioFormItem
          name={'residential_post_code'}
          schema={patientsFields}
        />
      </Grid>

      <Grid item>
        <InputFormItem
          name={'state'}
          schema={patientsFields}

        />
      </Grid>

      <Grid item>
        <InputFormItem
          name={'medicare_reference_Number'}
          schema={patientsFields}

        />
      </Grid>

      <Grid item>
        <DatePickerFormItem
          name={'medicare_expiry_date'}
          schema={patientsFields}
        />
      </Grid>

      <Grid item>
        <InputFormItem
          name={'IHI_Number'}
          schema={patientsFields}

        />
      </Grid>

      <Grid item>
        <InputFormItem
          name={'residential_street_address'}
          schema={patientsFields}

        />
      </Grid>

      <Grid item>
        <InputFormItem
          name={'preferred_pharmacy'}
          schema={patientsFields}

        />
      </Grid>

      <Grid item>
        <InputFormItem
          name={'preferred_pharmacy_address'}
          schema={patientsFields}

        />
      </Grid>

      <Grid item>
        <InputFormItem
          name={'preferred_pharmacy_suburb'}
          schema={patientsFields}

        />
      </Grid>

      <Grid item>
        <InputFormItem
          name={'Preferred_pharmacy_email'}
          schema={patientsFields}

        />
      </Grid>

      <Grid item>
        <InputFormItem
          name={'private_health_insurance'}
          schema={patientsFields}

        />
      </Grid>

      <Grid item>
        <InputFormItem
          name={'occupation'}
          schema={patientsFields}

        />
      </Grid>

      <Grid item>
        <InputFormItem
          name={'concession_card_holder'}
          schema={patientsFields}

        />
      </Grid>

      <Grid item>
        <InputFormItem
          multiline
          name={'notes'}
          schema={patientsFields}

        />
      </Grid>

      <Grid item>
        <InputFormItem
          name={'phone'}
          schema={patientsFields}

        />
      </Grid>

      <Grid item>
        <InputFormItem
          name={'medicare_number'}
          schema={patientsFields}

        />
      </Grid>

  </Grid>
  <Grid container spacing={3} mt={2}>
    <Grid item>
      <Button
        color="primary"
        variant="contained"
        onClick={form.handleSubmit}
      >
        Save
      </Button>
    </Grid>
    <Grid item>
      <Button
        color="primary"
        variant="outlined"
        onClick={form.handleReset}
      >
        Reset
      </Button>
    </Grid>
    <Grid item>
      <Button
        color="primary"
        variant="outlined"
        onClick={() => onCancel()}
      >
        Cancel
      </Button>
    </Grid>
  </Grid>
      </form>
      )
      }
    </Formik>
  </Widget>
  );
  if (findLoading) {
  return <Loader />;
  }
  if (isEditing && !record) {
  return <Loader />;
  }
  return renderForm();
  }
  export default PatientsForm;
