// Enhanced CRT Mouse Effects
(function () {
	const glowElement = document.getElementById('crtGlow');
	const distortionElement = document.getElementById('crtDistortion');
	let mouseX = 0,
		mouseY = 0;

	if (!glowElement || !distortionElement) return;

	// Update both glow and distortion position on mouse move
	document.addEventListener('mousemove', function (e) {
		mouseX = e.clientX;
		mouseY = e.clientY;

		// Update glow position and show
		glowElement.style.left = mouseX + 'px';
		glowElement.style.top = mouseY + 'px';
		glowElement.style.opacity = '1';

		// Update distortion position with slight offset and delay
		distortionElement.style.left = mouseX + 10 + 'px';
		distortionElement.style.top = mouseY - 5 + 'px';
		distortionElement.style.opacity = '0.8';

		// Add subtle mouse movement reactive scaling
		const intensity = Math.min(
			Math.sqrt(
				Math.pow(e.movementX || 0, 2) +
					Math.pow(e.movementY || 0, 2)
			) / 10,
			1
		);
		distortionElement.style.transform = `translate(-50%, -50%) scale(${
			1 + intensity * 0.1
		})`;
	});

	// Hide effects when mouse leaves window
	document.addEventListener('mouseleave', function () {
		glowElement.style.opacity = '0';
		distortionElement.style.opacity = '0';
	});

	// Show effects when mouse enters window
	document.addEventListener('mouseenter', function () {
		glowElement.style.opacity = '1';
		distortionElement.style.opacity = '0.8';
	});

	// Enhanced random screen flicker with distortion
	setInterval(() => {
		if (Math.random() < 0.003) {
			// 0.3% chance
			const scanlines = document.querySelector('.crt-scanlines');
			const grain = document.querySelector('.crt-grain');

			if (scanlines && grain) {
				// Brief intensity spike
				scanlines.style.opacity = '0.15';
				grain.style.opacity = '0.4';

				setTimeout(() => {
					scanlines.style.opacity = '1';
					grain.style.opacity = '0.25';
				}, 80);
			}
		}
	}, 1500);

	// Subtle chromatic aberration on click
	document.addEventListener('click', function (e) {
		distortionElement.style.background = `radial-gradient(
                circle,
                transparent 20%,
                rgba(255, 0, 0, 0.15) 30%,
                rgba(0, 255, 0, 0.1) 40%,
                rgba(0, 0, 255, 0.15) 50%,
                transparent 60%
            )`;

		setTimeout(() => {
			distortionElement.style.background = `radial-gradient(
                    circle,
                    transparent 30%,
                    rgba(255, 100, 100, 0.05) 40%,
                    rgba(100, 255, 100, 0.03) 50%,
                    rgba(100, 100, 255, 0.05) 60%,
                    transparent 70%
                )`;
		}, 200);
	});
})();
