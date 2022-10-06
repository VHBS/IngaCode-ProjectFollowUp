const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Projects', [
      {
        id: uuidv4(),
        name: 'IngaCode Project Follow Up',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Projects', null, {});
  },
};
