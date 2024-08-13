import { toggleMobileNav } from "../ui/toggleMobileNav.mjs";
toggleMobileNav();

// form validation and submission
// --------------------------------------------
const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

const submitForm = () => {
  form.addEventListener("submit", (e) => {
    // Prevent the form from submitting before validation
    e.preventDefault();

    // if all inputs are valid, submit the form. If not, display error messages
    validateInputFields();
    showSuccessMessage();
  });
};

// error message and style
const setError = (element, message) => {
  const inputMessageContainer = element.nextElementSibling;
  element.classList.add("form-error");
  element.classList.remove("form-success");
  inputMessageContainer.innerText = message;
};

// success message and style
const setSuccess = (element) => {
  const inputMessageContainer = element.nextElementSibling;
  element.classList.add("form-success");
  element.classList.remove("form-error");
  inputMessageContainer.innerText = "";
};

// email validation
const isEmailValid = (email) => {
  // regular expression for email validation, converts it to a lowercase string, tests it against the email validation regex pattern, and returns the validation result true or false
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email.toString().toLowerCase());
};

// validate all input fields
const validateInputFields = () => {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();

  // validate name
  if (nameValue === "") {
    setError(name, "Your name is required");
  } else if (nameValue.length <= 5) {
    setError(name, "Your name must be at least 5 characters long");
  } else {
    setSuccess(name);
  }

  // validate email
  if (emailValue === "") {
    setError(email, "Your email address is required");
  } else if (!isEmailValid(emailValue)) {
    // sets an error message if the email is not valid
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  // validate subject
  if (subjectValue === "") {
    setError(subject, "A subject is required");
  } else if (subjectValue.length <= 15) {
    setError(subject, "The subject must be at least 15 characters long");
  } else {
    setSuccess(subject);
  }

  // validate message
  if (messageValue === "") {
    setError(message, "A message is required");
  } else if (messageValue.length <= 25) {
    setError(message, "The message must be at least 25 characters long");
  } else {
    setSuccess(message);
  }
};

submitForm();

// if the form is submitted, display a success message

// if the form is submitted, clear the form fields

const showSuccessMessage = () => {
  const headingContainer = document.querySelector("#heading-section");
  const formSection = document.querySelector("#form-section");
  const successMessageContainer = document.querySelector(".form-success-section");

  if (
    name.classList.contains("form-success") &&
    email.classList.contains("form-success") &&
    subject.classList.contains("form-success") &&
    message.classList.contains("form-success")
  ) {
    // Display success message
    formSection.style.display = "none";
    headingContainer.style.display = "none";
    successMessageContainer.classList.remove("is-hidden");
    // successMessageContainer.style.display = "flex";

    // Clear input fields
    form.reset();

    // Optionally, remove success message after a few seconds
    setTimeout(() => {
      successMessageContainer.classList.add("is-hidden");
      // successMessageContainer.style.display = "flex"
      formSection.style.display = "block";
      headingContainer.style.display = "block";
    }, 5000); // 5 seconds
    // Prevent default form submission (since action is empty)
  }
};
