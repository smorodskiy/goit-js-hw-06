const refs = {
  inputElem: document.getElementById("validation-input"),
};

const input = refs.inputElem;
const dataLength = input.getAttribute("data-length");

input.addEventListener("blur", (e) => {
  input.classList.remove("invalid", "valid");
  input.value.length < dataLength ? 
  input.classList.add("invalid") : 
  input.classList.add("valid");
});
