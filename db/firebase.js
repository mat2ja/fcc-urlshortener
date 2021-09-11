require('dotenv').config();

const axios = require('axios');

const db_url = process.env.FIREBASE_URL;

// Store new url
const storeUrl = async ({ url, shorturl }) => {
	try {
		const created_at = new Date(Date.now());
		const { data: storedUrl } = await axios.put(
			`${db_url}/shorturls/${shorturl}.json`,
			{ url, created_at }
		);
		const stats = await updateStats(shorturl);

		return { data: { ...storedUrl, shorturl }, stats };
	} catch (error) {
		console.log(error);
	}
};

// Fetch stored url
const fetchUrl = async (shorturl) => {
	const { data } = await axios.get(`${db_url}/shorturls/${shorturl}.json`);
	return data ? { ...data, shorturl: parseInt(shorturl) } : null;
};

// Fetch stored url
const deleteUrl = async (shorturl) => {
	console.log('deleteUrl', shorturl);
	const { data } = await axios.put(`${db_url}/shorturls/${shorturl}.json`, {});
	console.log(data);
};

// Get new shorturl id
const getNewShorturl = async () => {
	try {
		const { data } = await axios.get(`${db_url}/stats.json`);
		const nextUrl = data.latest_id + 1;
		return nextUrl;
	} catch (error) {
		throw new Error({ erorr: 'Error getting shorturl' });
	}
};

// Update stats (latest shorturl id)
const updateStats = async (shorturl) => {
	const { data } = await axios.put(`${db_url}/stats.json`, {
		latest_id: shorturl,
	});
	return data;
};

module.exports = {
	storeUrl,
	getNewShorturl,
	fetchUrl,
	deleteUrl,
};
