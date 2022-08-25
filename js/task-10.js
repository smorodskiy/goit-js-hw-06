const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");
let divRoot = document.getElementById("boxes");

// Attaching
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const event = e.currentTarget;
    // Check attr
    if (event.hasAttribute("data-create")) {
      destroyBoxes();
      createBoxes(input.value);
    } else destroyBoxes();
  });
});

// Create boxes
function createBoxes(amount) {
  const divTempFragment = document.createDocumentFragment();
  let mul = 0;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.height = 30 + mul + "px";
    div.style.width = 30 + mul + "px";
    div.style.backgroundColor = getRandomHexColor();
    divTempFragment.appendChild(div);
    mul += 10;
  }

  // by one operation add to html
  divRoot.appendChild(divTempFragment)
}

// Remove boxes
function destroyBoxes() {
  divRoot.innerHTML = "";
}

// Random color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
