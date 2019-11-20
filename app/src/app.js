const dotenv = require('dotenv');
const express = require('express');
const routes = require('../src/routes/routes');
// const router = require('./routes/api/v1/createRouter.js');

const PORT = process.env.PORT || 8080
const app = express()

dotenv.config();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Service is listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})
