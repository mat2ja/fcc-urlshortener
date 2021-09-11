const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
	e.preventDefault();
	const urlInput = document.querySelector('#url_input');
	const url = urlInput.value.trim();
	try {
		const { status, data } = await axios.post(
			'/api/shorturl',
			{ url },
			{ validateStatus: () => true }
		);
		if (status >= 400) {
			throw new Error(data.error);
		}
		const { shorturl } = data;
		window.location.href = `/api/shorturl/${shorturl}`;
	} catch (error) {
		console.error(error.message);
	}
});
