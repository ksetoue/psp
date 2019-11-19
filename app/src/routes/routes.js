import express from 'express';

const routes = express.Router();

export default Routes {
        
}

routes.use();

routes.get('/', (request, response) => response.json({
    message: 'Up!',
}));

routes.get(
    '/transactions',
    transactionService.list,
);

routes.post(
    '/new-transaction',
    transactionService.create,
);

routes.get(
    '/payables',
    payableService.getBalance,
);

module.exports = routes;