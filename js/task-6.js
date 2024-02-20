function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputElem = document.querySelector("input");
const destroyElem = document.querySelector("[data-destroy]");
const createElem = document.querySelector("[data-create]");
const boxesElem = document.querySelector("#boxes");
let isFirst = true;
let width = 30;
let height = 30;

destroyElem.addEventListener("click", onButtonDestroy);
createElem.addEventListener("click", onButtonCreate);

function onButtonCreate(e) {
  e.preventDefault();
  const inputNum = inputElem.value;
  if (inputNum > 1 && inputNum <= 100) {
    createBoxes(inputNum);
  }
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) { 
    const box = document.createElement("div");
    if (isFirst) {
      box.style.width = width + `px`;
      box.style.height = height + `px`;
      isFirst = false;
    } else {
      width += 10;
      height += 10;
      box.style.width = width + `px`; 
      box.style.height = height + `px`; 
    }
    box.style.background = getRandomHexColor();
    boxesElem.append(box);
  }
  inputElem.value = "";
}

function onButtonDestroy() {
  boxesElem.textContent = "";
  isFirst = true;
  width = 30;
  height = 30;
}



