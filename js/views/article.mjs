import { toggleMobileNav } from "../helper/toggleMobileNav.mjs";
import { displaySinglePost } from "../ui/displaySinglePost.mjs";
import { createImageModalElements } from "../components/createImageModalElements.mjs";
import { displayCarousel } from "../handler/displayCarousel.mjs";
import { postContainer } from "../data/constants.mjs";
import { scrollToSectionByClick } from "../helper/scrollToSectionByClick.mjs";
import { toTopButtonWrapper, headerContainer } from "../data/constants.mjs";
import { InitializeModalEventListeners } from "../handler/InitializeModalEventListeners.mjs";

import { fetchPost } from "../api/fetchPost.mjs";
document.addEventListener("DOMContentLoaded", () => {
  // trying to increase loading speeds in terms of Lighthouse statistics
  fetchPost();
  // setting up event listeners to open/close modal
  InitializeModalEventListeners();
});

// mobile hamburger menu
toggleMobileNav();
// latest blog post carousel
displayCarousel();
// display complete post
displaySinglePost(postContainer);
// Initialize the modal
createImageModalElements();

// scroll to header by "to top button"
scrollToSectionByClick(toTopButtonWrapper, headerContainer);
