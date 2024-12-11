"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        "Users", // table name
        "totalCost", // new field name
        {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          allowNull: true,
        }
      ),
      queryInterface.addColumn(
        "Users", // table name
        "totalRevenue", // new field name
        {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          allowNull: true,
        }
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Users", "totalCost"),
      queryInterface.removeColumn("Users", "totalRevenue"),
    ]);
  },
};
