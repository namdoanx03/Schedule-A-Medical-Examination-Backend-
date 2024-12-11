"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        "bookings", // table name
        "patientName", // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        }
      ),
      queryInterface.addColumn(
        "bookings", // table name
        "patientPhoneNumber", // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        }
      ),
      queryInterface.addColumn(
        "bookings", // table name
        "patientAddress", // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        }
      ),
      queryInterface.addColumn(
        "bookings", // table name
        "patientReason", // new field name
        {
          type: Sequelize.TEXT,
          allowNull: true,
        }
      ),
      queryInterface.addColumn(
        "bookings", // table name
        "patientGender", // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        }
      ),
      queryInterface.addColumn(
        "bookings", // table name
        "patientBirthday", // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        }
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
                queryInterface.removeColumn("bookings", "patientName"),
                queryInterface.removeColumn("bookings", "patientPhoneNumber"),
                queryInterface.removeColumn("bookings", "patientAddress"),
                queryInterface.removeColumn("bookings", "patientReason"),
                queryInterface.removeColumn("bookings", "patientGender"),
                queryInterface.removeColumn("bookings", "patientBirthday")
    ]);
  },
};
