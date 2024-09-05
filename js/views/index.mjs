import { toggleMobileNav } from "../helper/toggleMobileNav.mjs";
import { fetchAllPosts } from "../api/fetchAllPosts.mjs";
import { displayCarousel } from "../handler/displayCarousel.mjs";
import { displayNewsArticle } from "../ui/displayNewsArticle.mjs";
import { scrollToSectionByClick } from "../helper/scrollToSectionByClick.mjs";
import { landingButton, mainContent, toTopButtonWrapper, headerContainer, searchPostsWrapper, searchInput } from "../data/constants.mjs";
import { toggleNavSearchIcon, closeSearchBarByClick, closeSearchBarByKey } from "../handler/searchBarEventListeners.mjs";
import { filterPostsBySearch } from "../handler/filterPostsBySearch.mjs";
import { preventSubmissionOnKeyPress } from "../helper/preventSubmissionOnKeyPress.mjs";

document.addEventListener("DOMContentLoaded", () => {
  // fetching all posts first to try increasing Lighthouse statistics
  fetchAllPosts();
  // toggle mobile nav
  toggleMobileNav();
  // display carouse
  displayCarousel();
  // display news article
  displayNewsArticle();
  // scrolling to content section(id) by button click
  scrollToSectionByClick(landingButton, mainContent);
  // scroll to header by "to top button"
  scrollToSectionByClick(toTopButtonWrapper, headerContainer);
  // toggle search bar open/closed
  toggleNavSearchIcon();
  // close search bar by click outside
  closeSearchBarByClick();
  // close search bar by keyboard "key"
  closeSearchBarByKey("Escape");
});

// calling the function to display them below the search bar on each page.
filterPostsBySearch(searchPostsWrapper);
// prevent submission from "Enter" key
preventSubmissionOnKeyPress(searchInput, "Enter");
