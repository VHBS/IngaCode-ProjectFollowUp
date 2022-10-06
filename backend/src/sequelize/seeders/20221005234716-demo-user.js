const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Users', [
      {
        id: uuidv4(),
        user_name: 'John',
        password: '123456789',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
