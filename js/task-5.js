function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.querySelector("body");
const buttonElem = document.querySelector(".change-color");
const spanElem = document.querySelector(".color");
buttonElem.addEventListener("click", onButtonClick);

function onButtonClick() {
  const color = getRandomHexColor();
  bodyElem.style.background = color;
  spanElem.textContent = color;
}