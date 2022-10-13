/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TimeTrackers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      startDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: 'start_date',
      },
      endDate: {
        type: Sequelize.DATE,
        field: 'end_date',
      },
      timeZoneId: {
        type: Sequelize.STRING(200),
        field: 'time_zone_id',
      },
      taskId: {
        type: Sequelize.UUID,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Tasks',
          key: 'id',
        },
        field: 'task_id',
      },
      collaboratorId: {
        type: Sequelize.UUID,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Collaborators',
          key: 'id',
        },
        field: 'collaborator_id',
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
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('TimeTrackers');
  },
};
