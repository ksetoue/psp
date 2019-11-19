// console.log('Service running on port:', process.env.PORT);
const dotenv = require('dotenv');
const express = require('express');
const Routes = require('./src/routes/routes.js');

const PORT = process.env.PORT || 8080
const app = express()

dotenv.config();

app.use(express.json());
app.use(Routes);

app.listen(PORT, () => {
    console.log(`Service is listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})
