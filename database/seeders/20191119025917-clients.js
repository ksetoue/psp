'use strict';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('clients', [
    {
      name: 'Nelson Bagetti',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Richard Hendricks',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('clients', null, {}),
};
