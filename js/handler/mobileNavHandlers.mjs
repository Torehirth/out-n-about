import { hamburgerMenu, mobileNav, HTMLbody } from "../data/constants.mjs";

export function toggleMobileNav() {
  // toggles the hamburger menu and mobile nav.
  hamburgerMenu.classList.toggle("is-active");
  mobileNav.classList.toggle("is-active");
}

// close the mobile nav by removing classes
export function closeMobileNav() {
  hamburgerMenu.classList.remove("is-active");
  mobileNav.classList.remove("is-active");
}

// close the nav when clicked outside an "a" tag or outside the hamburger icon.
export function closeMobileNavByClickOutside(e) {
  // if the HTML element is not an "a" or the hamburger icon doesn't contain the event target, close the nav
  if (e.target.localName !== "a" && !hamburgerMenu.contains(e.target)) {
    closeMobileNav();
  }
}

// if mobile nav is open stop page from scrolling
export const disableScrollWhenMobileNavOpen = () => {
  if (hamburgerMenu.classList.contains("is-active")) {
    HTMLbody.style.overflow = "hidden";
  } else {
    HTMLbody.style.overflow = "visible";
  }
};
