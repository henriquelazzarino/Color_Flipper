const colors = ['Red', 'Green', 'Blue', 'Purple', 'Gray', 'Black', 'Cyan', 'Yellow'];
const body = document.getElementById('body');
body.style.backgroundColor = '#b9ddf8'
document.getElementById('generate').addEventListener('click', event => {
    let position = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[position];
    const colorName = document.getElementById('colorName');
    colorName.textContent = colors[position];
    colorName.style.color = colors[position]
})