/**
 * @name transactionDomain
 * @description This module handles transaction interface with db models'
 *
 */
const { transaction: transactionModel } = require('../models');

const domain = {
    async new(client, payload) {
        const {
            paymentMethod,
            amount,
            cardNumber,
            cardOwnerName,
            cardExpirationDate,
            description,
        } = payload;
        
        // get the last 4 digits of a card
        const cardNumberLastDigits = Number(cardNumber.substr(-4));

        const transaction = await transactionModel.create({
            clientId: client,
            paymentMethod,
            amount,
            cardNumberLastDigits,
            cardOwnerName,
            cardExpirationDate,
            description,
        });

        return transaction;
    },

    async listTransactions(page, pageSize) {
        const offset = (page - 1) * pageSize;

        const transactions = await transactionModel.findAll({
            offset,
            pageSize,
        });

        return transactions;
    }
}

module.exports = domain;
