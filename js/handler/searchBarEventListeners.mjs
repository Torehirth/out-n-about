// ------- search bar event listeners ---------
import { searchForm, searchInput, navSearchButton, searchContentContainer, hamburgerMenuButton, mainContainer } from "../data/constants.mjs";
import { closeSearchBar } from "../ui/closeSearchBar.mjs";
import { openSearchBarWithTransition } from "../ui/openSearchBarWithTransition.mjs";

// toggles the search icon and displays the search bar
export const toggleNavSearchIcon = () => {
  navSearchButton.addEventListener("click", () => {
    if (searchForm.classList.contains("is-hidden")) {
      // if the search form contains a class of "hidden", remove "hidden" class that displays search bar
      openSearchBarWithTransition(searchForm, searchInput);
    } else {
      closeSearchBar(searchForm, searchContentContainer, mainContainer);
    }
  });
};

// closes the search bar and content by click outside of it
export const closeSearchBarByClick = () => {
  document.addEventListener("click", (e) => {
    // if the "hidden" class is not active, and the target localName is not a "span"(the search icon) or "input"(input field), close the search bar
    if (searchForm.classList.contains("visible") && e.target.localName !== "span" && e.target.localName !== "input") {
      closeSearchBar(searchForm, searchContentContainer, mainContainer);
    }
  });
};

// close the search bar and content with pressing keyboard
export const closeSearchBarByKey = (key) => {
  document.addEventListener("keydown", (e) => {
    // if the "hidden" class is not active and the called key is pressed, the "hidden" class is added
    if (!searchForm.classList.contains("is-hidden") && e.key === key) {
      closeSearchBar(searchForm, searchContentContainer, mainContainer);
    }
  });
};

// closing the search bar and content if the hamburger menu is opened
hamburgerMenuButton.addEventListener("click", () => {
  if (searchForm.classList.contains("visible")) {
    closeSearchBar(searchForm, searchContentContainer, mainContainer);
  }
});
