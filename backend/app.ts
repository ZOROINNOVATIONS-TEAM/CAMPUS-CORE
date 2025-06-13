import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import * as auth from './auth.ts';

mongoose.connect(process.env.MONGODB_URL!)
        .then(() => console.log('DB Connected'));

const app = express();
const port = 8080;

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.listen(port, () => {
   console.log(`Express running on port ${port}`)
})
