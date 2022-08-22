const refs = {
  buttons: document.querySelectorAll("button"),
  value: document.querySelector("value"),
};

let counterValue = 0;

refs.buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const event = e.currentTarget;
    const dataAttr = event.getAttribute("data-action");
    counterValue = value.innerText;

    dataAttr == "decrement"
      ? (value.innerText = --counterValue)
      : (value.innerText = ++counterValue);
  });
});
