document.addEventListener('DOMContentLoaded', () => {
	const yearSpan = document.getElementById('footer-year');
	if (yearSpan) {
		yearSpan.innerHTML = new Date().getFullYear();
	}
});
