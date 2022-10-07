/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Collaborators', [
      {
        id: 'e4824843-40b0-4d2a-8d33-c312b8268ded',
        name: 'Victor Schlichting',
        user_id: 'd8723224-e445-4ccc-aeb3-a4ad55462c84',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '1361e1c1-4170-4fdd-9c76-63fe8aae8966',
        name: 'VHBS',
        user_id: '23a5999d-dbfc-4960-ac4d-9ec2b91a302c',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('Collaborators', null, {});
  },
};
