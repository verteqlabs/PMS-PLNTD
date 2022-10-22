
const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class PatientsDBApi {

  static async create(data, options) {
  const currentUser = (options && options.currentUser) || { id: null };
  const transaction = (options && options.transaction) || undefined;

  const patients = await db.patients.create(
  {
  id: data.id || undefined,

    first_name: data.first_name
    ||
    null
,

    last_name: data.last_name
    ||
    null
,

    date_of_birth: data.date_of_birth
    ||
    null
,

    email: data.email
    ||
    null
,

    gender: data.gender
    ||
    null
,

    residential_suburb: data.residential_suburb
    ||
    null
,

    residential_post_code: data.residential_post_code
    ||
    null
,

    state: data.state
    ||
    null
,

    medicare_reference_Number: data.medicare_reference_Number
    ||
    null
,

    medicare_expiry_date: data.medicare_expiry_date
    ||
    null
,

    IHI_Number: data.IHI_Number
    ||
    null
,

    residential_street_address: data.residential_street_address
    ||
    null
,

    preferred_pharmacy: data.preferred_pharmacy
    ||
    null
,

    preferred_pharmacy_address: data.preferred_pharmacy_address
    ||
    null
,

    preferred_pharmacy_suburb: data.preferred_pharmacy_suburb
    ||
    null
,

    Preferred_pharmacy_email: data.Preferred_pharmacy_email
    ||
    null
,

    private_health_insurance: data.private_health_insurance
    ||
    null
,

    occupation: data.occupation
    ||
    null
,

    concession_card_holder: data.concession_card_holder
    ||
    null
,

    notes: data.notes
    ||
    null
,

    phone: data.phone
    ||
    null
,

    medicare_number: data.medicare_number
    ||
    null
,

  importHash: data.importHash || null,
  createdById: currentUser.id,
  updatedById: currentUser.id,
  },
  { transaction },
  );

  return patients;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const patients = await db.patients.findByPk(id, {
      transaction,
    });

    await patients.update(
      {

        first_name: data.first_name
        ||
        null
,

        last_name: data.last_name
        ||
        null
,

        date_of_birth: data.date_of_birth
        ||
        null
,

        email: data.email
        ||
        null
,

        gender: data.gender
        ||
        null
,

        residential_suburb: data.residential_suburb
        ||
        null
,

        residential_post_code: data.residential_post_code
        ||
        null
,

        state: data.state
        ||
        null
,

        medicare_reference_Number: data.medicare_reference_Number
        ||
        null
,

        medicare_expiry_date: data.medicare_expiry_date
        ||
        null
,

        IHI_Number: data.IHI_Number
        ||
        null
,

        residential_street_address: data.residential_street_address
        ||
        null
,

        preferred_pharmacy: data.preferred_pharmacy
        ||
        null
,

        preferred_pharmacy_address: data.preferred_pharmacy_address
        ||
        null
,

        preferred_pharmacy_suburb: data.preferred_pharmacy_suburb
        ||
        null
,

        Preferred_pharmacy_email: data.Preferred_pharmacy_email
        ||
        null
,

        private_health_insurance: data.private_health_insurance
        ||
        null
,

        occupation: data.occupation
        ||
        null
,

        concession_card_holder: data.concession_card_holder
        ||
        null
,

        notes: data.notes
        ||
        null
,

        phone: data.phone
        ||
        null
,

        medicare_number: data.medicare_number
        ||
        null
,

        updatedById: currentUser.id,
      },
      {transaction},
    );

    return patients;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || {id: null};
    const transaction = (options && options.transaction) || undefined;

    const patients = await db.patients.findByPk(id, options);

    await patients.update({
      deletedBy: currentUser.id
    }, {
      transaction,
    });

    await patients.destroy({
      transaction
    });

    return patients;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const patients = await db.patients.findOne(
      { where },
      { transaction },
    );

    if (!patients) {
      return patients;
    }

    const output = patients.get({plain: true});

    return output;
  }

  static async findAll(filter, options) {
    var limit = filter.limit || 0;
    var offset = 0;
    const currentPage = +filter.page;

    offset = currentPage * limit;

    var orderBy = null;

    const transaction = (options && options.transaction) || undefined;
    let where = {};
    let include = [

    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.first_name) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patients',
            'first_name',
            filter.first_name,
          ),
        };
      }

      if (filter.last_name) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patients',
            'last_name',
            filter.last_name,
          ),
        };
      }

      if (filter.date_of_birth) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patients',
            'date_of_birth',
            filter.date_of_birth,
          ),
        };
      }

      if (filter.email) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patients',
            'email',
            filter.email,
          ),
        };
      }

      if (filter.gender) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patients',
            'gender',
            filter.gender,
          ),
        };
      }

      if (filter.residential_suburb) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patients',
            'residential_suburb',
            filter.residential_suburb,
          ),
        };
      }

      if (filter.state) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patients',
            'state',
            filter.state,
          ),
        };
      }

      if (filter.medicare_reference_Number) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patients',
            'medicare_reference_Number',
            filter.medicare_reference_Number,
          ),
        };
      }

      if (filter.IHI_Number) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patients',
            'IHI_Number',
            filter.IHI_Number,
          ),
        };
      }

      if (filter.residential_street_address) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patients',
            'residential_street_address',
            filter.residential_street_address,
          ),
        };
      }

      if (filter.preferred_pharmacy) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patients',
            'preferred_pharmacy',
            filter.preferred_pharmacy,
          ),
        };
      }

      if (filter.preferred_pharmacy_address) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patients',
            'preferred_pharmacy_address',
            filter.preferred_pharmacy_address,
          ),
        };
      }

      if (filter.preferred_pharmacy_suburb) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patients',
            'preferred_pharmacy_suburb',
            filter.preferred_pharmacy_suburb,
          ),
        };
      }

      if (filter.Preferred_pharmacy_email) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patients',
            'Preferred_pharmacy_email',
            filter.Preferred_pharmacy_email,
          ),
        };
      }

      if (filter.private_health_insurance) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patients',
            'private_health_insurance',
            filter.private_health_insurance,
          ),
        };
      }

      if (filter.occupation) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patients',
            'occupation',
            filter.occupation,
          ),
        };
      }

      if (filter.concession_card_holder) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patients',
            'concession_card_holder',
            filter.concession_card_holder,
          ),
        };
      }

      if (filter.notes) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patients',
            'notes',
            filter.notes,
          ),
        };
      }

      if (filter.phone) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patients',
            'phone',
            filter.phone,
          ),
        };
      }

      if (filter.medicare_number) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patients',
            'medicare_number',
            filter.medicare_number,
          ),
        };
      }

      if (filter.medicare_expiry_dateRange) {
        const [start, end] = filter.medicare_expiry_dateRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            medicare_expiry_date: {
              ...where.medicare_expiry_date,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            medicare_expiry_date: {
              ...where.medicare_expiry_date,
              [Op.lte]: end,
            },
          };
        }
      }

      if (
        filter.active === true ||
        filter.active === 'true' ||
        filter.active === false ||
        filter.active === 'false'
      ) {
        where = {
          ...where,
          active:
            filter.active === true ||
            filter.active === 'true',
        };
      }

      if (filter.residential_post_code) {
        where = {
          ...where,
          residential_post_code: filter.residential_post_code,
        };
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.lte]: end,
            },
          };
        }
      }
    }

    let { rows, count } = await db.patients.findAndCountAll(
      {
        where,
        include,
        distinct: true,
        limit: limit ? Number(limit) : undefined,
        offset: offset ? Number(offset) : undefined,
        order: (filter.field && filter.sort)
          ? [[filter.field, filter.sort]]
          : [['createdAt', 'desc']],
        transaction,
      },
    );

//    rows = await this._fillWithRelationsAndFilesForRows(
//      rows,
//      options,
//    );

    return { rows, count };
  }

  static async findAllAutocomplete(query, limit) {
    let where = {};

    if (query) {
      where = {
        [Op.or]: [
          { ['id']: Utils.uuid(query) },
          Utils.ilike(
            'patients',
            'first_name',
            query,
          ),
        ],
      };
    }

    const records = await db.patients.findAll({
      attributes: [ 'id', 'first_name' ],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['first_name', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.first_name,
    }));
  }

};

