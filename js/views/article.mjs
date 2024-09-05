import { toggleMobileNav } from "../helper/toggleMobileNav.mjs";
import { displaySinglePost } from "../ui/displaySinglePost.mjs";
import { createImageModalElements } from "../components/createImageModalElements.mjs";
import { displayCarousel } from "../handler/displayCarousel.mjs";
import { postContainer, searchPostsWrapper, searchInput } from "../data/constants.mjs";
import { scrollToSectionByClick } from "../helper/scrollToSectionByClick.mjs";
import { toTopButtonWrapper, headerContainer } from "../data/constants.mjs";
import { InitializeModalEventListeners } from "../handler/InitializeModalEventListeners.mjs";
import { toggleNavSearchIcon, closeSearchBarByClick, closeSearchBarByKey } from "../handler/searchBarEventListeners.mjs";
import { filterPostsBySearch } from "../handler/filterPostsBySearch.mjs";
import { preventSubmissionOnKeyPress } from "../helper/preventSubmissionOnKeyPress.mjs";

import { fetchPost } from "../api/fetchPost.mjs";
document.addEventListener("DOMContentLoaded", () => {
  // fetching post first to try increasing Lighthouse statistics
  fetchPost();
  // setting up event listeners to open/close modal
  InitializeModalEventListeners();
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
