/**
 * @name payableDomain
 * @description This module handles transaction interface with db models'
 *
 */
const moment = require('moment');
const { payable: payableModel } = require('../models');

const status =  Object.freeze({
    PAID: 'paid',
    WAITING_FUNDS: 'waiting_funds',
});

const paymentMethods = Object.freeze({
    DEBIT: 'debit',
    CREDIT: 'credit',
});

const domain = {
    async new(transaction) {
        switch(transaction.paymentMethod) {
            case paymentMethods.DEBIT:
                this.createPayable(transaction, 3, status.PAID, transaction.createdAt);
            case paymentMethods.CREDIT:
                const paymentDate = moment(transaction.createdAt).add(30, 'days').format(); // D+30
                console.log('paymentDate:', paymentDate);
                this.createPayable(transaction, 5, status.WAITING_FUNDS, paymentDate);
        }        
    },

    async createPayable(transaction, fee, paymentStatus, paymentDate) {
        const discount =  fee / 100 * transaction.amount; 
        const amount = transaction.amount - discount;

        return await payableModel.create({
            transactionId : transaction.id,
            clientId: transaction.clientId,
            status: paymentStatus,
            fee,
            amount,
            paymentDate,
        });
    },

    async getAvailableAmount(client){
        return await payableModel.sum('amount', {
            where: {
                clientId: client,
                status: status.PAID,
            }
        });
    },

    async getWaitingFundsAmount(client) {
        return await payableModel.sum('amount', {
            where: {
                clientId: client,
                status: status.WAITING_FUNDS,
            }
        });
    },
}

module.exports = domain;
