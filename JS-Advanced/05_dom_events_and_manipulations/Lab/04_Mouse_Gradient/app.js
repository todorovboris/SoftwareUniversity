function attachGradientEvents() {
    const gradientBox = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradientBox.addEventListener('mousemove', (e) => {
        const mousePosition = e.offsetX;
        const boxWidth = gradientBox.clientWidth;

        const percent = Math.floor((mousePosition / boxWidth) * 100);

        result.textContent = `${percent}%`;
    });
}
