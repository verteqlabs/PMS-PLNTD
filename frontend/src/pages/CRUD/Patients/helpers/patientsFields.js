const patientsFields = {
  id: { type: 'id', label: 'ID' },

  first_name: {
    type: 'string',
    label: 'First Name',

    options: [{ value: 'value', label: 'value' }],
  },

  last_name: {
    type: 'string',
    label: 'Last Name',

    options: [{ value: 'value', label: 'value' }],
  },

  date_of_birth: {
    type: 'string',
    label: 'Date Of Birth',

    options: [{ value: 'value', label: 'value' }],
  },

  email: {
    type: 'string',
    label: 'Email',

    options: [{ value: 'value', label: 'value' }],
  },

  medicare_number: {
    type: 'enum',
    label: 'Medicare Number',

    options: [{ value: 'value', label: 'value' }],
  },

  gender: {
    type: 'string',
    label: 'Gender',

    options: [{ value: 'value', label: 'value' }],
  },

  phone: {
    type: 'enum',
    label: 'Phone',

    options: [{ value: 'value', label: 'value' }],
  },

  residential_suburb: {
    type: 'string',
    label: 'Residential Suburb',

    options: [{ value: 'value', label: 'value' }],
  },

  residential_post_code: {
    type: 'enum',
    label: 'Residential Post Code',

    options: [{ value: 'value', label: 'value' }],
  },

  state: {
    type: 'string',
    label: 'State',

    options: [{ value: 'value', label: 'value' }],
  },

  medicare_reference_Number: {
    type: 'string',
    label: 'Medicare Reference Number',

    options: [{ value: 'value', label: 'value' }],
  },

  medicare_expiry_date: {
    type: 'date',
    label: 'Medicare Expiry Date',

    options: [{ value: 'value', label: 'value' }],
  },

  IHI_Number: {
    type: 'string',
    label: 'IHI Number',

    options: [{ value: 'value', label: 'value' }],
  },

  residential_street_address: {
    type: 'string',
    label: 'Residential Street Address',

    options: [{ value: 'value', label: 'value' }],
  },

  preferred_pharmacy: {
    type: 'string',
    label: 'Preferred Pharmacy',

    options: [{ value: 'value', label: 'value' }],
  },

  preferred_pharmacy_address: {
    type: 'string',
    label: 'Preferred Pharmacy Address',

    options: [{ value: 'value', label: 'value' }],
  },

  preferred_pharmacy_suburb: {
    type: 'string',
    label: 'Preferred Pharmacy Suburb',

    options: [{ value: 'value', label: 'value' }],
  },

  Preferred_pharmacy_email: {
    type: 'string',
    label: 'Preferred Pharmacy Email',

    options: [{ value: 'value', label: 'value' }],
  },

  private_health_insurance: {
    type: 'string',
    label: 'Private Health Insurance',

    options: [{ value: 'value', label: 'value' }],
  },

  occupation: {
    type: 'string',
    label: 'Occupation',

    options: [{ value: 'value', label: 'value' }],
  },

  concession_card_holder: {
    type: 'string',
    label: 'Concession Card Holder',

    options: [{ value: 'value', label: 'value' }],
  },

  notes: {
    type: 'string',
    label: 'Notes',

    options: [{ value: 'value', label: 'value' }],
  },
};

export default patientsFields;
