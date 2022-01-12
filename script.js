let count = 0;

//const increment = () => {
//count += 1;
//document.getElementById('count-el').innerText = count;
//};

//const saveCount = () => {
//document.getElementById('final-count').innerText = count;
//count = 0;
//document.getElementById('count-el').innerText = count;
//};


const addButton = document.getElementById('counter');

addButton.addEventListener('click', (addButton) => {
    count += 1;
    console.log(count);
    document.getElementById('count-el').innerText = count;
});

const saveButton = document.getElementById('save-btn');
saveButton.addEventListener('click', (saveButton) => {
    count = 0;
    document.getElementById('count-el').innerText = count;
})
