const sequelize = require('sequelize');
const { transaction, payable } = require('../../../src/models');

const fakeTransaction = {
    clientId: 1,
    amount: 100.00,
    paymentMethod: 'debit',
    cardNumberLastDigits: 4879,
    cardOwnerName: 'Nelson Bagetti',
    cardExpirationDate: '06/21',
    description: 'Pied Piper Coin',
    createdAt: new Date(),
    }

const fakePayable = {
    clientId: 1,
    transactionId: null,
    status: 'paid',
    fee: 5,
    amount: 95.00,
    paymentDate: new Date(),
}

describe('Testing database models', () => {
    afterAll(() => sequelize.close());

    test('Transaction - create transaction with model', async () => {
        const t = await transaction.create(fakeTransaction);

        expect(t).toHaveProperty(
            'cardOwnerName',
            fakeTransaction.cardOwnerName,
        );

        fakePayable.transactionId = t.id;
        fakePayable.paymentDate = t.createdAt;
    });

    test('Payable - create payable with model', async () => {
        const p = await payable.create(fakePayable);
        expect(p).toHaveProperty('fee', fakePayable.fee);
    });
});
