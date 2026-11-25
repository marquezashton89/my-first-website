const contactForm = document.querySelector("#contact-form");
if (contactForm) {
const requiredFields = [
{
input: document.querySelector("#name"),
message: "Please enter your name."
},
{
input: document.querySelector("#email"),
message: "Please enter a valid email address, such as name@example.com."
},
{
input: document.querySelector("#subject"),
message: "Please enter a subject for your message."
},
{
input: document.querySelector("#message"),
message: "Please enter a message before submitting."
}
];
function showError(input, message) {
const error = document.querySelector(`#${input.id}-error`);
if (error) {
  error.textContent = message;
}

input.setAttribute("aria-invalid", "true");

}
function clearError(input) {
const error = document.querySelector(`#${input.id}-error`);
if (error) {
  error.textContent = "";
}

input.removeAttribute("aria-invalid");

}
requiredFields.forEach(({ input }) => {
if (input) {
input.addEventListener("input", () => {
clearError(input);
});
}
});
contactForm.addEventListener("submit", (event) => {
let formIsValid = true;
requiredFields.forEach(({ input, message }) => {
  if (!input) {
    formIsValid = false;
    return;
  }

  if (input.value.trim() === "") {
    showError(input, message);
    formIsValid = false;
  } else if (input.type === "email" && !input.validity.valid) {
    showError(input, message);
    formIsValid = false;
  } else {
    clearError(input);
  }
});

if (!formIsValid) {
  event.preventDefault();
}

});
}