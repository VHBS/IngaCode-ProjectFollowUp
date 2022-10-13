/** @type {import('sequelize-cli').Migration} */

const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync();
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Users', [
      {
        id: 'd8723224-e445-4ccc-aeb3-a4ad55462c84',
        user_name: 'John',
        password: bcrypt.hashSync('123456789', salt),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '23a5999d-dbfc-4960-ac4d-9ec2b91a302c',
        user_name: 'Victor',
        password: bcrypt.hashSync('987654321', salt),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '88ac8439-1c23-4902-b11a-534cf0411d91',
        user_name: 'vitorugo',
        password: '$2a$10$noiXAsTUeMg5SxscX5yAGu.rSoM8G.iofowUpblhKcUHkon48sDNC', // password: 123456
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
