import { successMessageContainer } from "../data/constants.mjs";
import { toggleMobileNav } from "../ui/toggleMobileNav.mjs";
import { submitForm } from "../handler/submitForm.mjs";
import { exitModal } from "../handler/exitModal.mjs";

// toggling mobile nav
toggleMobileNav();

// Calling the submitForm function
submitForm();

// Close modal by clicking outside the modal
window.addEventListener("click", (event) => {
  if (!successMessageContainer.contains(event.target)) {
    exitModal();
  }
});

// Close modal by clicking the X button
const exitModalButton = document.querySelector(".modal-exit-btn");
exitModalButton.addEventListener("click", exitModal);

// Close modal by pressing the Escape or Enter key
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" || event.key === "Enter") {
    exitModal();
  }
});
