import { toggleMobileNav } from "../helper/toggleMobileNav.mjs";
import { handlePosts } from "../handler/handlePosts.mjs";
import { postWrapper } from "../data/constants.mjs";

// trying to increase loading speeds in terms of Lighthouse
import { fetchAllPosts } from "../api/fetchAllPosts.mjs";
document.addEventListener("DOMContentLoaded", () => {
  fetchAllPosts();
});

// toggling mobile nav
toggleMobileNav();
// fetching and displaying posts
handlePosts(postWrapper);
