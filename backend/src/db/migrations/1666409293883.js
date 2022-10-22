module.exports = {
  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns {Promise<void>}
   */
  async up(queryInterface, Sequelize) {
    /**
     * @type {Transaction}
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('patients', 'phone', { transaction });

      await queryInterface.addColumn(
        'patients',
        'phone',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('patients', 'medicare_number', {
        transaction,
      });

      await queryInterface.addColumn(
        'patients',
        'medicare_number',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns {Promise<void>}
   */
  async down(queryInterface, Sequelize) {
    /**
     * @type {Transaction}
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('patients', 'medicare_number', {
        transaction,
      });

      await queryInterface.addColumn(
        'patients',
        'medicare_number',
        {
          type: Sequelize.DataTypes.ENUM,

          values: ['value'],
        },
        { transaction },
      );

      await queryInterface.removeColumn('patients', 'phone', { transaction });

      await queryInterface.addColumn(
        'patients',
        'phone',
        {
          type: Sequelize.DataTypes.ENUM,

          values: ['value'],
        },
        { transaction },
      );

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
