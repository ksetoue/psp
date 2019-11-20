/**
 * @name transactionController
 * @description This module handles redirects from routes to the transaction service'
 *
 */
const transactionService = require('../services/transactionService');

const controller = {
    async new(req, res) {
        const client = req.headers.clientid;

        const transaction = await transactionService.generate(
            client,
            req.body,
        );

        return res.json({
            transaction,
        });
    },

    async list(req, res) {
        const page = req.query.page || 1; 
        const pageSize = req.query.pageSize || 5;
                
        const transactions = await transactionService.list(page, pageSize);

        return res.json({
            transactions,
        });
    },
};

module.exports = controller;
