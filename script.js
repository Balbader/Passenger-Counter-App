let count = 0;

const button = document.getElementById('counter');

document.addEventListener('click', (button) => {
    count += 1;
    console.log(count);
    document.getElementById('count-el').innerText = count;
});
