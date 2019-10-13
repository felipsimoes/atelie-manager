module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('brands', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      shortName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('brands');
  },
};
