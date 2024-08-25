import { successMessageContainer, exitModalButton } from "../data/constants.mjs";
import { toggleMobileNav } from "../helper/toggleMobileNav.mjs";
import { submitForm } from "../handler/submitForm.mjs";
import { exitSuccessModal } from "../handler/exitModal.mjs";

// toggling mobile nav
toggleMobileNav();

// Calling the submitForm function
submitForm();

// Close modal by clicking outside the modal
window.addEventListener("click", (event) => {
  if (!successMessageContainer.contains(event.target)) {
    exitSuccessModal();
  }
});

// Close modal by clicking the X button
exitModalButton.addEventListener("click", exitSuccessModal);

// Close modal by pressing the Escape or Enter key
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" || event.key === "Enter") {
    exitSuccessModal();
  }
});
