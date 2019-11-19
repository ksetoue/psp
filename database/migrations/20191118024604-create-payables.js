'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('payables', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    transactionId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
          model: 'transactions',
          key: 'id',
      },
    },

    clientId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
          model: 'clients',
          key: 'id',
      },
    },

    status: {
      type: Sequelize.ENUM('paid', 'waiting_funds'),
      allowNull: false,
    },

    fee: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    amount: {
      type: Sequelize.FLOAT,
      allowNull: false,
      validate: {
        min: 1,
      },
    },

    paymentDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },

    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
  }),

  ddown: (queryInterface) => queryInterface.dropTable('payables'),
};
