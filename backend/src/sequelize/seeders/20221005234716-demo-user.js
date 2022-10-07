/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Users', [
      {
        id: 'd8723224-e445-4ccc-aeb3-a4ad55462c84',
        user_name: 'John',
        password: '123456789',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '23a5999d-dbfc-4960-ac4d-9ec2b91a302c',
        user_name: 'Victor',
        password: '987654321',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
