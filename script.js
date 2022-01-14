let count = 0;

let countEl = document.getElementById("count-el");

const addButton = document.getElementById('counter');

addButton.addEventListener('click', () => {
    count += 1;
    countEl.innerText = count;
});

let finalCount = document.getElementById('final-count');

const saveButton = document.getElementById('save-btn');

saveButton.addEventListener('click', () => {
    finalCount.innerText = count;
    count = 0;
    countEl.innerText = count;
})
