const payableDomain = require('../../interface-adapters/payableDomain');

const controller = {
    async getBalance(req, res) {
        const client = req.query.clientId;

        return res.json({
            available:      await payableDomain.getAvailableAmount(client),
            waiting_funds:  await payableDomain.getWaitingFundsAmount(client),
        });
    }
};

module.exports = controller;
