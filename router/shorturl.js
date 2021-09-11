const express = require('express');
const fb = require('../db/firebase.js');

const router = new express.Router();

const isUrl = (url) => {
	const regex =
		/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
	return regex.test(url);
};

router.post('/api/shorturl', async (req, res) => {
	try {
		const { url } = req.body;

		if (!url) {
			throw new Error('url not found');
		} else if (!isUrl(url)) {
			throw new Error('invalid url');
		}

		const shorturl = await fb.getNewShorturl();
		if (!shorturl) {
			return res.status(500).send();
		}

		const { data, stats } = await fb.storeUrl({
			url,
			shorturl,
		});

		res.status(201).send(data);
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
});

router.get('/api/shorturl/:shorturl', async (req, res) => {
	try {
		const fetchedUrl = await fb.fetchUrl(req.params.shorturl);
		if (!fetchedUrl) {
			res.status(404).send({ error: 'url not found' });
		}
		res.redirect(fetchedUrl.original_url);
	} catch (error) {
		res.status(500).send();
	}
});

router.delete('/api/shorturl/:shorturl', async (req, res) => {
	try {
		await fb.deleteUrl(req.params.shorturl);
		res.status(200).send('url deleted');
	} catch (error) {
		res.status(400).send();
	}
});

module.exports = router;
