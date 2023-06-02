const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.port || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use('/api', routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialnetworkingapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API Server running on port ${PORT}!`);
    });
});