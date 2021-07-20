module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.changeColumn(
    'alunos',
    'email',
    {
      type: Sequelize.STRING,
      allownull: false,
      unique: true,
    },
  ),

  down: async () => {},
};
