let count = 0;
let countEl = document.getElementById("count-el");
let finalCount = document.getElementById('final-count');
const addButton = document.getElementById('counter');
const saveButton = document.getElementById('save-btn');

addButton.addEventListener('click', () => {
    count += 1;
    countEl.textContent = count;
});

saveButton.addEventListener('click', () => {
    let countStr = count + ' - ';
    finalCount.textContent += countStr;
    count = 0;
    countEl.textContent = count;
})
