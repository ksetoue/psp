const payableDomain = require('../../interface-adapters/payableDomain');
const transactionDomain = require('../../interface-adapters/transactionDomain');

const service = {
    async generate(client, body) {
        const {
            paymentMethod,
            cardNumber,
            cardOwnerName,
            cardExpirationDate,
            cvv,
        } = body;

        // TODO: Send card info for another service validator. For now:
        const validated = true;

        if (!validated) {
            throw new Error('Authorization failed while processing this transaction.');
        }

        const transaction = await transactionDomain.new(client, body);

        await payableDomain.new(transaction);

        return transaction;
    },

    async list(page, pageSize) {
        return await transactionDomain.listTransactions(page, pageSize);
    },
};

module.exports = service;
