// imports
const express = require('express');
const routes = require('./routes');
const port = process.env.PORT || 4000;
const app = express();
const cors = require('cors');
const { MongoClient } = require('mongodb');



// TODO: middleware - CORS
app.use(cors());

// middleware - JSON parsing
// app.use(express.json());

// middleware - API routes
app.use('/api/v1/', routes.users);
app.use('/api/v1/crypto', routes.crypto);

// listen
app.listen(port, () => console.log(`Server is running on port ${port}`));
