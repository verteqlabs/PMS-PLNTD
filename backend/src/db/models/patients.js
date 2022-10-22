const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const patients = sequelize.define(
    'patients',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      first_name: {
        type: DataTypes.TEXT,
      },

      last_name: {
        type: DataTypes.TEXT,
      },

      date_of_birth: {
        type: DataTypes.TEXT,
      },

      email: {
        type: DataTypes.TEXT,
      },

      gender: {
        type: DataTypes.TEXT,
      },

      residential_suburb: {
        type: DataTypes.TEXT,
      },

      residential_post_code: {
        type: DataTypes.ENUM,

        values: ['value'],
      },

      state: {
        type: DataTypes.TEXT,
      },

      medicare_reference_Number: {
        type: DataTypes.TEXT,
      },

      medicare_expiry_date: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('medicare_expiry_date')
            ? moment
                .utc(this.getDataValue('medicare_expiry_date'))
                .format('YYYY-MM-DD')
            : null;
        },
      },

      IHI_Number: {
        type: DataTypes.TEXT,
      },

      residential_street_address: {
        type: DataTypes.TEXT,
      },

      preferred_pharmacy: {
        type: DataTypes.TEXT,
      },

      preferred_pharmacy_address: {
        type: DataTypes.TEXT,
      },

      preferred_pharmacy_suburb: {
        type: DataTypes.TEXT,
      },

      Preferred_pharmacy_email: {
        type: DataTypes.TEXT,
      },

      private_health_insurance: {
        type: DataTypes.TEXT,
      },

      occupation: {
        type: DataTypes.TEXT,
      },

      concession_card_holder: {
        type: DataTypes.TEXT,
      },

      notes: {
        type: DataTypes.TEXT,
      },

      phone: {
        type: DataTypes.TEXT,
      },

      medicare_number: {
        type: DataTypes.TEXT,
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  patients.associate = (db) => {
    db.patients.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.patients.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return patients;
};
