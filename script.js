const button = document.getElementById('drop-button');
const options = document.getElementById('drop-options');
const optionEntities = document.querySelectorAll('.option');

button.addEventListener('click', () => {
    options.setAttribute('visible', !options.getAttribute('visible'));
});

optionEntities.forEach(option => {
    option.addEventListener('click', () => {
        button.setAttribute('text', 'value:' + option.dataset.value + '; align: center; color: white');
        options.setAttribute('visible', false);
    });
});