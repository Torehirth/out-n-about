import { hamburgerMenu, navLinks, mobileSoMeLinks } from "../data/constants.mjs";
import { toggleMobileNav, closeMobileNav, closeMobileNavByClickOutside, disableScrollWhenMobileNavOpen } from "./mobileNavHandlers.mjs";

// handle all event listeners on the mobile nav
export function mobileNavEventListeners() {
  // toggle the mobile nav with the hamburger icon
  hamburgerMenu.addEventListener("click", function (event) {
    // prevent the click event from propagating to the document, and prevents the nav from closing immediately after opened.
    event.stopPropagation();
    toggleMobileNav();
    // if mobile nav is open stop page from scrolling
    disableScrollWhenMobileNavOpen();
  });

  // close the nav when clicked outside an "a" tag or outside the hamburger icon.
  document.addEventListener("click", closeMobileNavByClickOutside);

  // close the nav when a page link inside it is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });
  // close the nav when a SoMe link inside it is clicked
  mobileSoMeLinks.forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });
}
