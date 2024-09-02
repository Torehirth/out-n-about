import { toggleMobileNav } from "../helper/toggleMobileNav.mjs";
import { fetchAllPosts } from "../api/fetchAllPosts.mjs";
import { displayCarousel } from "../handler/displayCarousel.mjs";
import { displayNewsArticle } from "../ui/displayNewsArticle.mjs";
import { scrollToSectionByClick } from "../helper/scrollToSectionByClick.mjs";
import { landingButton, mainContent, toTopButtonWrapper, headerContainer } from "../data/constants.mjs";

// trying to increase loading speeds in terms of Lighthouse statistics
document.addEventListener("DOMContentLoaded", () => {
  fetchAllPosts();

  // toggle mobile nav
  toggleMobileNav();

  // display carouse
  displayCarousel();

  // display news article
  displayNewsArticle();

  // scrolling to content section(id) by button
  scrollToSectionByClick(landingButton, mainContent);

  // scroll to header by "to top button"
  scrollToSectionByClick(toTopButtonWrapper, headerContainer);
});
