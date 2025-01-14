const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookiesparser = require('cookie-parser');
const connectToDB = require('./DB/db');
const userRoutes = require('./routes/user.routes');
connectToDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Routes








app.get('/', (req, res) => {    
    res.send('Hello World!');
});

app.use('/users', userRoutes);
module.exports = app;