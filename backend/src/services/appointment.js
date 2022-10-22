const db = require('../db/models');
const AppointmentDBApi = require('../db/api/appointment');

module.exports = class AppointmentService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await AppointmentDBApi.create(
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
      let appointment = await AppointmentDBApi.findBy(
        {id},
        {transaction},
      );

      if (!appointment) {
        throw new ValidationError(
          'appointmentNotFound',
        );
      }

      await AppointmentDBApi.update(
        id,
        data,
        {
          currentUser,
          transaction,
        },
      );

      await transaction.commit();
      return appointment;

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

      await AppointmentDBApi.remove(
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

