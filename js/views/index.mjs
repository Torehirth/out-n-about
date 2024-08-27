import { toggleMobileNav } from "../helper/toggleMobileNav.mjs";
import { fetchAllPosts } from "../api/fetchAllPosts.mjs";
import { displayCarousel } from "../handler/displayCarousel.mjs";
import { displayNewsArticle } from "../ui/displayNewsArticle.mjs";

// trying to increase loading speeds in terms of Lighthouse statistics
document.addEventListener("DOMContentLoaded", () => {
  fetchAllPosts();
});

// toggle mobile nav
toggleMobileNav();

// display carouse
displayCarousel();

// display news article
displayNewsArticle();

const landingButton = document.querySelector("#landing-btn");
const mainContent = document.querySelector("#main-content");

landingButton.addEventListener("click", () => {
  mainContent.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
