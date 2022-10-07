const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Projects', [
      {
        id: 'a785c018-33ca-4f3e-ba92-9ef04daed385',
        name: 'IngaCode Project Follow Up',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        name: 'IngaCode Another Project',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Projects', null, {});
  },
};
