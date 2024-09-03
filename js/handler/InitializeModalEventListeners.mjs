import { displayImagePopup, closeImagePopup } from "../handler/handleImageModal.mjs";

export const InitializeModalEventListeners = async () => {
  const openModalButton = document.querySelector("#open-modal-button");
  if (openModalButton) {
    openModalButton.addEventListener("click", displayImagePopup);
  }

  try {
    // Dynamically imports modal elements from createImageModalElements by destructuring assignment
    // import() returns a promise, have to pause it so it can be resolved (await)
    // destructuring assignment: directly extract named exports from an imported module into variables.
    const { modalExitButton, imageModalContainer } = await import("../components/createImageModalElements.mjs");

    // closing modal by clicking outside
    imageModalContainer.addEventListener("click", (event) => {
      if (event.target === imageModalContainer || event.target === modalExitButton) {
        closeImagePopup();
      }
    });
    // closing modal by Escape key
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeImagePopup();
      }
    });
  } catch (error) {
    console.error("Error loading modal elements:", error);
  }
};
