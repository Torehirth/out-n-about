import { name, email, subject, message } from "../data/constants.mjs";
import { setError } from "../helper/setError.mjs";
import { setSuccess } from "../helper/setSuccess.mjs";
import { isEmailValid } from "../helper/isEmailValid.mjs";

// ------------------- Contact form validation -------------------
export const validateInputFields = () => {
  // trim() removes whitespace from both ends of a string
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();

  // Validate name
  if (nameValue === "") {
    setError(name, "Your name is required");
  } else if (nameValue.length <= 5) {
    setError(name, "Your name must be at least 5 characters long");
  } else {
    setSuccess(name);
  }

  // Validate email
  if (emailValue === "") {
    setError(email, "Your email address is required");
  } else if (!isEmailValid(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  // Validate subject
  if (subjectValue === "") {
    setError(subject, "A subject is required");
  } else if (subjectValue.length <= 15) {
    setError(subject, "Subject must be at least 15 characters long");
  } else {
    setSuccess(subject);
  }

  // Validate message
  if (messageValue === "") {
    setError(message, "A message is required");
  } else if (messageValue.length <= 25) {
    setError(message, "Message must be at least 25 characters long");
  } else {
    setSuccess(message);
  }
};
