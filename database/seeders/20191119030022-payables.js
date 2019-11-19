'use strict';

module.exports = {
  up: async (queryInterface) => {
    const client = await queryInterface.sequelize.query(
      'SELECT id FROM clients LIMIT 1',
      { plain: true },
    );

    const transaction = await queryInterface.sequelize.query(
      'SELECT id FROM transactions LIMIT 1',
      { plain: true },
    );

    queryInterface.bulkInsert('payables', [
      {
        transactionId: transaction.id,
        clientId: client.id,
        status: 'waiting_funds',
        fee: 5,
        amount: 95.00,
        paymentDate: new Date(),
        createdAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface) => queryInterface.bulkDelete('payables', null, {}),
};
