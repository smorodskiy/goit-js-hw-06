const inputElem = document.getElementById("font-size-control");
const spanElem = document.getElementById("text");

inputElem.addEventListener("input", () => {
  spanElem.style.fontSize = inputElem.value + "px";
});
