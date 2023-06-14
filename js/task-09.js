function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', () => {
  const randomColor = generateRandomColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});

function generateRandomColor() {
  // Генеруємо випадковий шестизначний колір
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return `#${color}`;
}