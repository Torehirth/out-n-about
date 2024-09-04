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

// ------- search bar event listeners ---------

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const navSearchButton = document.querySelector("#nav-search-btn");

const toggleNavSearchIcon = () => {
  // initially hidden
  searchForm.classList.add("hidden");

  navSearchButton.addEventListener("click", () => {
    if (searchForm.classList.contains("hidden")) {
      // if hidden, remove "hidden" class that displays search bar
      searchForm.classList.remove("hidden");
      // adds the transition effect on the search bar and sets the input in focus
      setTimeout(() => {
        searchForm.classList.add("visible");
        searchInput.focus();
      }, 10);
    } else {
      // add "hidden" class and remove "visible" class
      searchForm.classList.add("hidden");
      searchForm.classList.remove("visible");
    }
  });
};

toggleNavSearchIcon();

const closeSearchBarByClick = () => {
  document.addEventListener("click", (e) => {
    // if the hidden class is not active, and the target localName is not a "span" or "input", the "hidden" class is added
    if (searchForm.classList.contains("visible") && e.target.localName !== "span" && e.target.localName !== "input") {
      searchForm.classList.add("hidden");
    }
  });
};

closeSearchBarByClick();

const closeSearchBarByKey = (key) => {
  document.addEventListener("keydown", (e) => {
    // if the "hidden" class is not active and the called key is pressed, the "hidden" class is added
    if (!searchForm.classList.contains("hidden") && e.key === key) {
      searchForm.classList.add("hidden");
    }
  });
};
closeSearchBarByKey("Escape");

// ----- search functionality -------
const searchContainer = document.querySelector("#search-bar-container");
const submitButton = document.querySelector("#search-submit-btn");
