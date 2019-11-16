// console.log('Service running on port:', process.env.PORT);
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const PORT = process.env.PORT || 8080

const app = express()
app.get('*', (req, res) => {
    res.json('response');
})


app.listen(PORT, () => {
    console.log(`Service is listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})