import { hamburgerMenu, mobileNav } from "../data/constants.mjs";

export function toggleMobileNav() {
  hamburgerMenu.addEventListener("click", function () {
    // toggles the hamburger menu and mobile nav.
    hamburgerMenu.classList.toggle("is-active");
    mobileNav.classList.toggle("is-active");
    // make the X white when mobile nav is displayed.
    if (mobileNav.classList.contains("is-active")) {
      hamburgerMenu.classList.add = "is-active";
    }
  });
}
