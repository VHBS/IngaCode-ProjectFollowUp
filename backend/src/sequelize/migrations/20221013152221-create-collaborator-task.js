/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CollaboratorTasks', {
      colaboratorId: {
        allowNull: false,
        type: Sequelize.UUID,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Collaborators',
          key: 'id',
        },
        field: 'collaborator_id',
      },
      taskId: {
        allowNull: false,
        type: Sequelize.UUID,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Tasks',
          key: 'id',
        },
        field: 'task_id',
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
    await queryInterface.dropTable('CollaboratorTasks');
  },
};
