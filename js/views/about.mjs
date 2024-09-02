import { toggleMobileNav } from "../helper/toggleMobileNav.mjs";
import { displayCarousel } from "../handler/displayCarousel.mjs";
import { scrollToSectionByClick } from "../helper/scrollToSectionByClick.mjs";
import { toTopButtonWrapper, headerContainer } from "../data/constants.mjs";

// toggle mobile nav
toggleMobileNav();
// display posts carousel
displayCarousel();
// scroll to header by "to top button"
scrollToSectionByClick(toTopButtonWrapper, headerContainer);
