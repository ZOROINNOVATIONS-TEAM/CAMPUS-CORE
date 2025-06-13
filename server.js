const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const initializeDB = require('./db/init');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/user', userRoutes);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('✅ MongoDB connected');
    await initializeDB();
    app.listen(5000, () => console.log('🚀 Server running on port 5000'));
  })
  .catch(err => console.error('❌ DB Connection Error:', err));
