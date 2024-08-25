import { toggleMobileNav } from "../helper/toggleMobileNav.mjs";
import { fetchAllPosts } from "../api/fetchAllPosts.mjs";
import { displayCarousel } from "../handler/displayCarousel.mjs";
// trying to increase loading speeds in terms of Lighthouse
document.addEventListener("DOMContentLoaded", () => {
  fetchAllPosts();
});

toggleMobileNav();

// display carouse
displayCarousel();
