import { toggleMobileNav } from "../handler/toggleMobileNav.mjs";
import { scrollToSectionByClick } from "../helper/scrollToSectionByClick.mjs";
import { toTopButtonWrapper, headerContainer, searchPostsWrapper, searchInput } from "../data/constants.mjs";
import { handleCategoryButtons } from "../handler/handleCategoryButtons.mjs";
import { fetchAllPosts } from "../api/fetchAllPosts.mjs";
import { toggleCategoryDropDownButton } from "../handler/toggleCategoryDropDownButton.mjs";
import { toggleNavSearchIcon, closeSearchBarByClick, closeSearchBarByKey } from "../handler/searchBarEventListeners.mjs";
import { filterPostsBySearch } from "../handler/filterPostsBySearch.mjs";
import { preventSubmissionOnKeyPress } from "../helper/preventSubmissionOnKeyPress.mjs";

document.addEventListener("DOMContentLoaded", () => {
  // fetching all posts first to try increasing Lighthouse statistics
  fetchAllPosts();
  // toggling mobile nav
  toggleMobileNav();
  // scroll to header by "to top button"
  scrollToSectionByClick(toTopButtonWrapper, headerContainer);
  // function to display all posts by category and change category by buttons
  handleCategoryButtons();
  // toggle the category drop down button
  toggleCategoryDropDownButton();
  // toggle search bar open/closed
  toggleNavSearchIcon();
  // close search bar by click outside
  closeSearchBarByClick();
  // close search bar by keyboard "key"
  closeSearchBarByKey("Escape");
  // calling the function to display them below the search bar on each page.
  filterPostsBySearch(searchPostsWrapper);
  // prevent submission from "Enter" key
  preventSubmissionOnKeyPress(searchInput, "Enter");
});
