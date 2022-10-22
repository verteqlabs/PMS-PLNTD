const db = require('../db/models');
const PatientsDBApi = require('../db/api/patients');

module.exports = class PatientsService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await PatientsDBApi.create(
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  };
  static async update(data, id, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      let patients = await PatientsDBApi.findBy(
        {id},
        {transaction},
      );

      if (!patients) {
        throw new ValidationError(
          'patientsNotFound',
        );
      }

      await PatientsDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return patients;

    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  };

  static async remove(id, currentUser) {
    const transaction = await db.sequelize.transaction();

    try {
      if (currentUser.role !== 'admin') {
        throw new ValidationError(
          'errors.forbidden.message',
        );
      }

      await PatientsDBApi.remove(
        id,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};

