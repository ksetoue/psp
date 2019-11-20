const express = require('express');
const transactionController = require('../application_business_rules/controllers/transactionController');
const payableController = require('../application_business_rules/controllers/payableController');

const routes = express.Router();

// TODO: refactor to read route files and load them into an object that can be passed to routes
routes.post(
    '/new-transaction',
    transactionController.new,
);
        
routes.get(
    '/transactions',
    transactionController.list,
);
        
routes.get(
    '/payables',
    payableController.getBalance,
);  

module.exports = routes;
