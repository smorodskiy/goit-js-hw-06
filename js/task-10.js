const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");
let div = document.getElementById("boxes");

// Attaching
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const event = e.currentTarget;
    // Check attr
    if (event.hasAttribute("data-create")) {
      createBoxes(input.value);
    } else destroyBoxes();
  });
});

// Create boxes
function createBoxes(amount) {
  const divNew = div.cloneNode(false);
  let mul = 0;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.height = 30 + mul + "px";
    div.style.width = 30 + mul + "px";
    div.style.backgroundColor = getRandomHexColor();
    divNew.appendChild(div);
    mul += 10;
  }

  // by one operation add to html
  div.parentNode.replaceChild(divNew, div);
  div = document.getElementById("boxes");
}

// Remove boxes
function destroyBoxes() {
  div.innerHTML = "";
}

// Random color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
