const refs = {
  inputElem: document.getElementById("name-input"),
  titleElem: document.getElementById("name-output"),
};

const input = refs.inputElem;
const title = refs.titleElem;

input.addEventListener("input", (e) => {
  input.value != "" ? (title.innerText = input.value) : (title.innerText = "Anonymous");
});
