"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        "Users", // table name
        "status", // new field name
        {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          allowNull: true,
        }
      )
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Users", "status")
    ]);
  },
};
