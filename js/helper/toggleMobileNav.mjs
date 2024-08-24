import { hamburgerMenu, mobileNav, navLinks, mobileNavLinks, mobileSoMeLinks } from "../data/constants.mjs";

// export function toggleMobileNav() {
//   hamburgerMenu.addEventListener("click", function () {
//     // toggles the hamburger menu and mobile nav.
//     hamburgerMenu.classList.toggle("is-active");
//     mobileNav.classList.toggle("is-active");
//     // make the X white when mobile nav is displayed.
//     if (mobileNav.classList.contains("is-active")) {
//       hamburgerMenu.classList.add = "is-active";
//     }
//   });
// }

export function toggleMobileNav() {
  function closeMobileNav() {
    hamburgerMenu.classList.remove("is-active");
    mobileNav.classList.remove("is-active");
  }

  function handleClickOutside(event) {
    if (!mobileNavLinks.contains(event.target) && !hamburgerMenu.contains(event.target)) {
      closeMobileNav();
    }
  }

  hamburgerMenu.addEventListener("click", function (event) {
    // prevent the click event from propagating to the document
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
