const sequelize = require('sequelize');
const transactionService = require('../../src/application_business_rules/services/transactionService');

describe('Transaction Service', () => {
    describe('list transactions', () => {
        afterAll(() => sequelize.close());

        test('should return an array of transaction', async () => {
            const transactions = await transactionService.list(1,5);

            expect(transactions).toBeInstanceOf(Array);
        });
    });
});
