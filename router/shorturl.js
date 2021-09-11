const express = require('express');
const isUrl = require('validator/lib/isURL');
const fb = require('../db/firebase.js');

const router = new express.Router();

router.post('/api/shorturl', async (req, res) => {
	try {
		const { url } = req.body;

		if (!url) {
			throw new Error('URL not provided');
		} else if (!isUrl(url)) {
			throw new Error('Invalid URL');
		}

		const shorturl = await fb.getNewShorturl();
		if (!shorturl) {
			res.status(500).send();
		}

		const { data, stats } = await fb.storeUrl({
			url,
			shorturl,
		});

		res.status(201).send(data);
	} catch (error) {
		res.status(404).send({ error: error.message });
	}
});

router.get('/api/shorturl/:shorturl', async (req, res) => {
	try {
		const fetchedUrl = await fb.fetchUrl(req.params.shorturl);
		if (!fetchedUrl) {
			res.status(404).send({ error: 'URL not found' });
		}
		res.send(fetchedUrl);
	} catch (error) {
		res.status(500).send();
	}
});

router.delete('/api/shorturl/:shorturl', async (req, res) => {
	try {
		await fb.deleteUrl(req.params.shorturl);
		res.status(200).send('URL deleted');
	} catch (error) {
		res.status(400).send();
	}
});

module.exports = router;
