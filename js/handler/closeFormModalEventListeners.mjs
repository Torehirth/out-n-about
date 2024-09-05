import { successMessageContainer, exitModalButton } from "../data/constants.mjs";
import { exitSuccessModal } from "../handler/exitModal.mjs";

// Close modal by clicking outside the modal
export const closeFormModalByClickOutside = () => {
  window.addEventListener("click", (event) => {
    if (!successMessageContainer.contains(event.target)) {
      exitSuccessModal();
    }
  });
};

// Close modal by clicking the X button
export const closeFormModalByButton = () => {
  exitModalButton.addEventListener("click", exitSuccessModal);
};

// Close modal by pressing the Escape or Enter key
export const closeFormModalByKey = () => {
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" || event.key === "Enter") {
      exitSuccessModal();
    }
  });
};
