'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('transactions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    clientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'clients',
            key: 'id',
        },
    },

    paymentMethod: {
        type: Sequelize.ENUM('debit', 'credit'),
        allowNull: false,
    },

    cardNumberLastDigits: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { len: [0,4] },
    },

    cardOwnerName: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    cardExpirationDate: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    amount: {
      type: Sequelize.FLOAT,
      allowNull: false,
      validate: {
          min: 1,
      },
    },

    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
    },

    deletedAt: {
        type: Sequelize.DATE,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('transactions'),
};
