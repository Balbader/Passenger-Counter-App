let count = 0;

const addButton = document.getElementById('counter');
addButton.addEventListener('click', (addButton) => {
    count += 1;
    document.getElementById('count-el').innerText = count;
});

const saveButton = document.getElementById('save-btn');
saveButton.addEventListener('click', (saveButton) => {
    document.getElementById('final-count').innerText = count;
    count = 0;
    document.getElementById('count-el').innerText = count;
})
