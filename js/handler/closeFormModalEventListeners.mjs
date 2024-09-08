import { successMessageContainer, exitModalButton } from "../data/constants.mjs";
import { exitFormSuccessModal } from "../ui/exitFormSuccessModal.mjs";

// Close modal by clicking outside the modal
export const closeFormModalByClickOutside = () => {
  document.addEventListener("click", (e) => {
    if (!successMessageContainer.contains(e.target)) {
      exitFormSuccessModal();
    }
  });
};

// Close modal by clicking the exit (X) button
export const closeFormModalByButton = () => {
  exitModalButton.addEventListener("click", exitFormSuccessModal);
};

// Close modal by pressing the Escape or Enter key
export const closeFormModalByKey = () => {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" || event.key === "Enter") {
      exitFormSuccessModal();
    }
  });
};
