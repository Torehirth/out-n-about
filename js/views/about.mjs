import { toggleMobileNav } from "../helper/toggleMobileNav.mjs";
import { displayCarousel } from "../handler/displayCarousel.mjs";
import { scrollToSectionByClick } from "../helper/scrollToSectionByClick.mjs";
import { toTopButtonWrapper, headerContainer } from "../data/constants.mjs";
import { toggleNavSearchIcon, closeSearchBarByClick, closeSearchBarByKey } from "../handler/searchBarEventListeners.mjs";

document.addEventListener("DOMContentLoaded", () => {
  // toggle mobile nav
  toggleMobileNav();
  // display posts carousel
  displayCarousel();
  // scroll to header by "to top button"
  scrollToSectionByClick(toTopButtonWrapper, headerContainer);
  // toggle search bar open/closed
  toggleNavSearchIcon();
  // close search bar by click outside
  closeSearchBarByClick();
  // close search bar by keyboard "key"
  closeSearchBarByKey("Escape");
});
