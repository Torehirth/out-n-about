import { submitForm } from "../handler/submitForm.mjs";
import { scrollToSectionByClick } from "../helper/scrollToSectionByClick.mjs";
import { toTopButtonWrapper, headerContainer, searchPostsWrapper, searchInput } from "../data/constants.mjs";
import { closeFormModalByButton, closeFormModalByClickOutside, closeFormModalByKey } from "../handler/formSuccessModalEventListeners.mjs";
import { toggleNavSearchIcon, closeSearchBarByClick, closeSearchBarByKey } from "../handler/searchBarEventListeners.mjs";
import { filterPostsBySearch } from "../handler/filterPostsBySearch.mjs";
import { preventSubmissionOnKeyPress } from "../helper/preventSubmissionOnKeyPress.mjs";
import { mobileNavEventListeners } from "../handler/mobileNavEventListeners.mjs";
import { toggleDarkMode } from "../handler/toggleDarkMode.mjs";

// open/closes the mobile nav
mobileNavEventListeners();
// Calling the submitForm function
submitForm();
// scroll to header by "to top button"
scrollToSectionByClick(toTopButtonWrapper, headerContainer);
// toggle search bar open/closed
toggleNavSearchIcon();
// close search bar by click outside
closeSearchBarByClick();
// close search bar by keyboard "key"
closeSearchBarByKey("Escape");
// close form modal functions
closeFormModalByClickOutside();
closeFormModalByButton();
closeFormModalByKey();
// calling the function to display them below the search bar on each page.
filterPostsBySearch(searchPostsWrapper);
// prevent submission from "Enter" key
preventSubmissionOnKeyPress(searchInput, "Enter");
// toggle dark mode/light mode
toggleDarkMode();
