require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', (req, res) => {
	res.json({ greeting: 'hello API' });
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
