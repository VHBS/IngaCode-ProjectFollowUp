const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Tasks', [
      {
        id: uuidv4(),
        name: 'First Task',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        project_id: 'a785c018-33ca-4f3e-ba92-9ef04daed385',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Tasks', null, {});
  },
};
