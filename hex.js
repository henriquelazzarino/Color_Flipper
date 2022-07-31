const hexa = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const body = document.getElementById('body');
body.style.backgroundColor = '#b9ddf8'
document.getElementById('generate').addEventListener('click', event => {
    var color = [];
    let position;
    for (let i = 0; i < 6; i++) {
        position = Math.floor(Math.random() * hexa.length);
        color += hexa[position];
    }
    body.style.backgroundColor = "#" + color;
    const colorName = document.getElementById('colorName');
    colorName.textContent = "#" + color;
    colorName.style.color = "#" + color;
})