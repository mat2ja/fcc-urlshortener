const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', async (e) => {
	e.preventDefault();
	console.log(form.submit());
	// console.log(e);
	// e.preventDefault();
	// const urlInput = document.querySelector('#url_input');
	// console.log(urlInput);
	// const url = urlInput.value.trim();
	// await axios.post('/api/shorturl', {
	// 	url,
	// });
	// form.submit();
});
