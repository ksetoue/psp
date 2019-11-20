'use strict';

module.exports = {
  up: async (queryInterface) => {
    const client = await queryInterface.sequelize.query(
      'SELECT id FROM clients LIMIT 1',
      { plain: true },
    );

    queryInterface.bulkInsert('transactions', [
      {
        clientId: client.id,
        amount: 100.00,
        paymentMethod: 'credit',
        cardNumberLastDigits: 4879,
        cardOwnerName: 'Nelson Bagetti',
        cardExpirationDate: '06/21',
        description: 'Pied Piper Coin',
        createdAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface) => queryInterface.bulkDelete('transactions', null, {}),
};
