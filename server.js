const express = require('express');
const cors = require('cors');
const shorturlRouter = require('./router/shorturl.js');

const app = express();

// Basic Configuration
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));
app.use(shorturlRouter);

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
