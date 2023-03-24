const rangeInput = document.getElementById('font-size-control');
const fontText = document.getElementById('text');

rangeInput.addEventListener('input', () => {
    fontText.style.fontSize = `${rangeInput.value}px`;
})