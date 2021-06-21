'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('articles', 
      "title", {
        type: Sequelize.STRING
      })

    await queryInterface.addColumn('articles', 
      "description", {
        type: Sequelize.TEXT
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('articles');
  }
};
