import { form, name, email, subject, message, formSection, successMessageContainer, headingContainer, body } from "../data/constants.mjs";

export const successModalPopup = () => {
  if (
    // Check if all input fields have the "form-success" class (validated)
    name.classList.contains("form-success") &&
    email.classList.contains("form-success") &&
    subject.classList.contains("form-success") &&
    message.classList.contains("form-success")
  ) {
    // Display success modal popup
    formSection.style.display = "none";
    headingContainer.style.display = "none";
    successMessageContainer.classList.remove("is-hidden");
    // turn background outside modal dark opacity by adding "darken-background" class and turn body black by adding "black-section" class to the body (for the contrast checker)
    body.classList.add("darken-background");
    body.classList.remove("grey-section");
    body.classList.add("black-section");
    // Clear input fields
    form.reset();
  }
};
