const express = require('express');
const cors = require('cors');
const isUrl = require('validator/lib/isURL');
const shorturlRouter = require('./router/shorturl.js');

const app = express();

// Basic Configuration
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));
app.use(shorturlRouter);

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/views/index.html`);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
