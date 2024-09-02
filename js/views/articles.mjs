import { toggleMobileNav } from "../helper/toggleMobileNav.mjs";
import { scrollToSectionByClick } from "../helper/scrollToSectionByClick.mjs";
import { toTopButtonWrapper, headerContainer } from "../data/constants.mjs";
import { handleCategoryButtons } from "../handler/handleCategoryButtons.mjs";
import { fetchAllPosts } from "../api/fetchAllPosts.mjs";
import { toggleCategoryDropDownButton } from "../handler/toggleCategoryDropDownButton.mjs";

document.addEventListener("DOMContentLoaded", () => {
  // trying to increase loading speeds in terms of Lighthouse statistics
  fetchAllPosts();
  // toggling mobile nav
  toggleMobileNav();
  // scroll to header by "to top button"
  scrollToSectionByClick(toTopButtonWrapper, headerContainer);
  // function to display all posts by category and change category by buttons
  handleCategoryButtons();
  // toggle the category drop down button
  toggleCategoryDropDownButton();
});
