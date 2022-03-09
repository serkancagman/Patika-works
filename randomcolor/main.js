const mainDiv = document.getElementById('main');
const generateBtn = document.getElementById('generate');
const colorName = document.getElementById('colorName');
const copyBtn = document.getElementById('copy');
const directionValue = document.getElementById('direction');
const generateRandomColor = () => {
    const elements = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += elements[Math.floor(Math.random() * 16)];
    }
    return color;
}

const generateRandomGradient = (direction) => {
    const color1 = generateRandomColor();
    const color2 = generateRandomColor();
    const gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;
    return gradient;
}

console.log(generateRandomColor()); 
console.log(generateRandomGradient());

generateBtn.addEventListener('click', () => {
    mainDiv.style.background = generateRandomGradient(directionValue.value);
    colorName.textContent = generateRandomGradient(directionValue.value);
});

copyBtn.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const color = colorName.textContent;
    textarea.value = color;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Copied Success');
})

