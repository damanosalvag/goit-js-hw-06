
const nameImput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameImput.addEventListener("input", () => {
    nameOutput.textContent = nameImput.value || 'Anonymous';      
}); 