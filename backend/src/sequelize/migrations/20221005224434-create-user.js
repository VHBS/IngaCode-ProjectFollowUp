/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Users',
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        userName: {
          type: Sequelize.STRING(250),
          field: 'user_name',
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING(512),
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
          field: 'created_at',
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
          field: 'updated_at',
        },
        deletedAt: {
          type: Sequelize.DATE,
          field: 'deleted_at',
        },
      },
      {
        underscored: true,
      },
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Users');
  },
};
