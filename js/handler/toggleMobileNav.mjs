import { hamburgerMenu, mobileNav, navLinks, mobileNavLinks, mobileSoMeLinks } from "../data/constants.mjs";

// toggle the mobile nav with the hamburger icon
export function toggleMobileNav() {
  function closeMobileNav() {
    hamburgerMenu.classList.remove("is-active");
    mobileNav.classList.remove("is-active");
  }

  // close mobile nav when click outside
  function handleClickOutside(e) {
    // if the HTML element is not an "a" or the hamburger icon doesn't contain the event target, close the nav
    if (e.target.localName !== "a" && !hamburgerMenu.contains(e.target)) {
      closeMobileNav();
    }
  }

  hamburgerMenu.addEventListener("click", function (event) {
    // prevent the click event from propagating to the document, and prevents the nav from closing immediately after opened.
    event.stopPropagation();

    // toggles the hamburger menu and mobile nav.
    hamburgerMenu.classList.toggle("is-active");
    mobileNav.classList.toggle("is-active");
  });

  document.addEventListener("click", handleClickOutside);

  // close the nav when a page link inside it is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });
  // close the nav when a SoMe link inside it is clicked
  mobileSoMeLinks.forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });
}
