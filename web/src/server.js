const express = require('express');
const mustacheExpress = require('mustache-express');
const os = require('os');
const { Pool } = require('pg');

const app = express();
app.use(express.static('public'));

// Set up Mustache as the templating engine
app.set('view engine', 'html');
app.engine('html', mustacheExpress());
app.set('views', __dirname);

const port = 3000;
const dbhost = process.env.DB_HOST || 'localhost';
console.log(`Using database host: ${dbhost}`);
const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'dockeruser',
    password: process.env.DB_PASSWORD || 'dockerpass',
    database: process.env.DB_NAME || 'pets',
    port: 5432,
})

app.get('/', (req, res) => {
    res.status(200).send("Wild Animals of Maasai Mara National Park");
})

app.get('/images', async (req, res) => {
    const result = await pool.query('SELECT * FROM images');
    return res.status(200).json(result.rows);
})

app.get('/animal', async (req, res) => {
    const imageId = getRandomInt(6) + 1;
    const result = await pool.query('SELECT * FROM images WHERE imageid=$1', [imageId]);
    const url = result.rows[0].url;
    res.render('index', {
        url: url,
        hostname: os.hostname()
    });
});


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

app.listen(port, '0.0.0.0', () => {
    console.log(`Application started on port ${port}`);
})