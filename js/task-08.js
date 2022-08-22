const data = {
  email: "",
  password: "",
};

const elements = {
  form: document.querySelector(".login-form"),
  email: document.querySelector("input[name=email]"),
  password: document.querySelector("input[name=password]"),
};

elements.form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (elements.email.value == "" || elements.password.value == "") {
    alert("Треба заповнити всі поле");
    return;
  }

  data.email = elements.email.value;
  data.password = elements.password.value;

  console.log(`Email: ${data.email}, Password: ${data.password}`);

  reset();
});

function reset() {
  elements.email.value = "";
  elements.password.value = "";
}
