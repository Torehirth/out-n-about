import { toggleMobileNav } from "../helper/toggleMobileNav.mjs";
import { scrollCarouselByClick } from "../handler/scrollCarouselByClick.mjs";
import { scrollCarouselByDrag } from "../handler/scrollCarouselByDrag.mjs";
import { carousel, cardImages, postContainer } from "../data/constants.mjs";
import { cardHoverEffect } from "../ui/cardHoverEffect.mjs";
import { displaySinglePost } from "../ui/displaySinglePost.mjs";
import { createImageModalElements } from "../components/createImageModalElements.mjs";
import { displayImagePopup, closeImagePopup } from "../handler/handleImageModal.mjs";

// trying to increase loading speeds in terms of Lighthouse
import { fetchPost } from "../api/fetchPost.mjs";
document.addEventListener("DOMContentLoaded", () => {
  fetchPost();
});

// mobile hamburger menu
toggleMobileNav();
// blog post carousel
scrollCarouselByClick();
scrollCarouselByDrag(carousel);
cardHoverEffect(cardImages);
// display complete post
displaySinglePost(postContainer);
// Initialize the modal
createImageModalElements();

// setting up event listeners to open the modal
document.addEventListener("DOMContentLoaded", async () => {
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
});
