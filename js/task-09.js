function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector("button.change-color");
const span = document.querySelector(".color");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  span.innerText = currentColor;
});
