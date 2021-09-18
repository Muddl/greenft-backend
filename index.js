const express = require('express');

// Middleware
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Routes
const { getAllNfts, getPageOfNfts } = require('./routes/nfts');

// Instantiate app
const app = express();
const port = 4433;

// Logger
app.use(morgan('short'));

app.route('/markets')
    // Get all markets
    .get((req, res) => {
        res.status(200).send('suh');
    });

app.route('/nfts/:pageNum')
    .get(async (req, res) => {
        const paginatedNfts = await getPageOfNfts();
        res.status(200).send(paginatedNfts);
    });

app.route('/nfts')
    .get(async (req, res) => {
        const nfts = await getAllNfts();
        res.status(200).json(nfts);
    });

app.listen(port, () => {
    console.log(`REST App listening at http://localhost:${port}`);
})