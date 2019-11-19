const express = require('express');
const routes = express.Router();

routes.get('/', (request, response) => response.json({
    message: 'Up!',
}));
        
        // routes.get(
        //     '/transactions',
        // );
        
        // routes.post(
        //     '/new-transaction',
        // );
        
        // routes.get(
        //     '/payables',
        // );  

module.exports = routes;
