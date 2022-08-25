const inputElem = document.getElementById("font-size-control");
const spanElem = document.getElementById("text");

spanElem.style.fontSize = inputElem.value + "px";

inputElem.addEventListener("input", () => {
  spanElem.style.fontSize = inputElem.value + "px";
});