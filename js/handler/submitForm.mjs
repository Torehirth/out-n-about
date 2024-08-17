import { successModalPopup } from "../handler/successModalPopup.mjs";
import { validateInputFields } from "../helper/validateInputFields.mjs";

// Submit form function
export const submitForm = () => {
  form.addEventListener("submit", (e) => {
    // Prevent the form from submitting before validation
    e.preventDefault();
    // If all inputs are valid, submit the form. If not, display error messages
    validateInputFields();
    // When all inputs are valid, display the success modal popup
    successModalPopup();
  });
};
