// ------- search bar event listeners ---------
import { searchForm, searchInput, navSearchButton, searchContentContainer, hamburgerMenuButton } from "../data/constants.mjs";

export const toggleNavSearchIcon = () => {
  // initially hidden
  searchForm.classList.add("is-hidden");

  navSearchButton.addEventListener("click", () => {
    if (searchForm.classList.contains("is-hidden")) {
      // if hidden, remove "hidden" class that displays search bar
      searchForm.classList.remove("is-hidden");
      // adds the transition effect on the search bar and sets the input in focus
      setTimeout(() => {
        searchForm.classList.add("visible");
        // searchContentContainer.classList.add("visible");
        searchInput.focus();
      }, 10);
    } else {
      // add "hidden" class and remove "visible" class
      searchForm.classList.add("is-hidden");
      searchForm.classList.remove("visible");
      // hide the posts/content
      searchContentContainer.classList.add("is-hidden");
      // reset form when not visible
      searchForm.reset();
    }
  });
};

export const closeSearchBarByClick = () => {
  document.addEventListener("click", (e) => {
    // if the hidden class is not active, and the target localName is not a "span" or "input", the "hidden" class is added
    if (searchForm.classList.contains("visible") && e.target.localName !== "span" && e.target.localName !== "input" && e.target) {
      searchForm.classList.add("is-hidden");
      // hide the posts/content
      searchContentContainer.classList.add("is-hidden");
      // reset input values when not visible
      searchForm.reset();
    }
  });
};

export const closeSearchBarByKey = (key) => {
  document.addEventListener("keydown", (e) => {
    // if the "hidden" class is not active and the called key is pressed, the "hidden" class is added
    if (!searchForm.classList.contains("is-hidden") && e.key === key) {
      searchForm.classList.add("is-hidden");
      // hide the posts/content
      searchContentContainer.classList.add("is-hidden");
      // reset input values when not visible
      searchForm.reset();
    }
  });
};

// closing the search bar and content if the hamburger menu is opened
hamburgerMenuButton.addEventListener("click", () => {
  if (searchForm.classList.contains("visible")) {
    // if the "visible" class is active hide the search form
    searchForm.classList.add("is-hidden");
    // hide the posts/content
    searchContentContainer.classList.add("is-hidden");
    // reset input values when not visible
    searchForm.reset();
  }
});
