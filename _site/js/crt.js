// CRT Mouse Glow Effect
(function () {
	// ✅ Exit early on mobile (touch devices or small screens)
	if (
		'ontouchstart' in window ||
		navigator.maxTouchPoints > 0 ||
		window.innerWidth < 768
	) {
		return;
	}

	const glowElement = document.getElementById('crtGlow');
	let mouseX = 0,
		mouseY = 0;
	let isMouseMoving = false;
	let fadeTimeout;

	// Update glow position on mouse move
	document.addEventListener('mousemove', function (e) {
		mouseX = e.clientX;
		mouseY = e.clientY;

		if (glowElement) {
			glowElement.style.left = mouseX + 'px';
			glowElement.style.top = mouseY + 'px';
			glowElement.style.opacity = '1';
		}

		isMouseMoving = true;

		// Clear existing timeout
		clearTimeout(fadeTimeout);

		// Set new timeout to fade out glow
		fadeTimeout = setTimeout(() => {
			isMouseMoving = false;
			if (glowElement) {
				glowElement.style.opacity = '0';
			}
		}, 1000);
	});

	// Hide glow when mouse leaves window
	document.addEventListener('mouseleave', function () {
		if (glowElement) {
			glowElement.style.opacity = '0';
		}
		clearTimeout(fadeTimeout);
	});

	// Optional: Random screen flicker (very subtle)
	setInterval(() => {
		if (Math.random() < 0.005) {
			// 0.5% chance
			document.body.style.opacity = '0.98';
			setTimeout(() => {
				document.body.style.opacity = '1';
			}, 50);
		}
	}, 1000);
})();
